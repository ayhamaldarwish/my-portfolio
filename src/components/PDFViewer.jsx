import { useState, useEffect } from 'react';
import { Document, Page } from 'react-pdf';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import '../pdfWorker.js'; // Import the PDF worker setup
import PDFErrorMessage from './PDFErrorMessage';
import { CV_FILE } from '../constants/pdfConfig';

const PDFViewer = ({ pdfUrl, onClose, onError }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [pdfError, setPdfError] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(true);

  // Preload the PDF to check if it exists
  useEffect(() => {
    const checkPdfExists = async () => {
      try {
        // Add a timestamp to avoid caching issues
        const urlWithTimestamp = `${pdfUrl}?t=${new Date().getTime()}`;
        const response = await fetch(urlWithTimestamp);
        if (!response.ok) {
          setPdfError(true);
          console.error('PDF file not found or cannot be accessed');

          // Call the onError callback if provided
          if (onError && typeof onError === 'function') {
            onError(new Error('PDF file not found or cannot be accessed'));
          }
        }
      } catch (error) {
        setPdfError(true);
        console.error('Error checking PDF:', error);

        // Call the onError callback if provided
        if (onError && typeof onError === 'function') {
          onError(error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    // Wrap in a try-catch to prevent any errors from breaking the component
    try {
      checkPdfExists();
    } catch (error) {
      console.error('Error in PDF existence check:', error);
      setPdfError(true);
      setIsLoading(false);

      // Call the onError callback if provided
      if (onError && typeof onError === 'function') {
        onError(error);
      }
    }
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setIsLoading(false);
    setPdfError(false);
  }

  function onDocumentLoadError(error) {
    console.error('Error loading PDF:', error);
    setPdfError(true);
    setIsLoading(false);

    // Call the onError callback if provided
    if (onError && typeof onError === 'function') {
      onError(error);
    }
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages);
    });
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  const downloadPDF = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = CV_FILE.filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-zinc-800 rounded-xl p-4 max-w-3xl w-full max-h-[90vh] flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-white">CV Preview</h2>
          <div className="flex gap-2">
            <motion.button
              className="btn btn-primary flex items-center gap-2"
              onClick={downloadPDF}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload />
              <span>Download</span>
            </motion.button>
            <motion.button
              className="p-2 rounded-full bg-zinc-700 text-white"
              onClick={onClose}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTimes />
            </motion.button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-zinc-900 rounded-lg">
          {pdfError ? (
            <PDFErrorMessage onDownload={downloadPDF} />
          ) : (
            <Document
              file={{
                url: pdfUrl,
                httpHeaders: {
                  'Cache-Control': 'no-cache',
                  'Pragma': 'no-cache'
                },
              }}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={onDocumentLoadError}
              className="flex justify-center"
              loading={
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
                </div>
              }
              error={
                <div className="text-center p-4 text-red-500">
                  <p>Failed to load PDF. Please try again.</p>
                </div>
              }
              options={{
                cMapUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/cmaps/',
                cMapPacked: true,
                standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/',
                withCredentials: false,
              }}
            >
              <Page
                pageNumber={pageNumber}
                renderTextLayer={false}
                renderAnnotationLayer={false}
                className="mx-auto"
                scale={1}
              />
            </Document>
          )}
        </div>

        {numPages && !pdfError && (
          <div className="flex justify-between items-center mt-4">
            <motion.button
              className="btn btn-outline"
              onClick={previousPage}
              disabled={pageNumber <= 1}
              whileHover={pageNumber > 1 ? { scale: 1.05 } : {}}
              whileTap={pageNumber > 1 ? { scale: 0.95 } : {}}
            >
              Previous
            </motion.button>

            <p className="text-center text-white">
              Page {pageNumber} of {numPages}
            </p>

            <motion.button
              className="btn btn-outline"
              onClick={nextPage}
              disabled={pageNumber >= numPages}
              whileHover={pageNumber < numPages ? { scale: 1.05 } : {}}
              whileTap={pageNumber < numPages ? { scale: 0.95 } : {}}
            >
              Next
            </motion.button>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

PDFViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  onError: PropTypes.func
};

export default PDFViewer;
