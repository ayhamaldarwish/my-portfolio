import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaTimes } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { CV_FILE } from '../constants/pdfConfig';

/**
 * A simple PDF viewer that uses an iframe to display PDFs
 * This is a fallback option if react-pdf has issues
 */
const SimplePDFViewer = ({ pdfUrl, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setLoadError(true);
    setIsLoading(false);
  };

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
          {isLoading && (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
            </div>
          )}

          {loadError ? (
            <div className="text-center p-8 text-red-500">
              <p className="text-xl mb-4">Failed to load PDF. Please try again.</p>
              <p className="text-sm mb-4">The PDF file could not be loaded. It may be missing or inaccessible.</p>
              <motion.button
                className="btn btn-primary"
                onClick={downloadPDF}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download PDF Instead
              </motion.button>
            </div>
          ) : (
            <iframe
              src={`${pdfUrl}#toolbar=0&navpanes=0`}
              className="w-full h-[70vh]"
              onLoad={handleIframeLoad}
              onError={handleIframeError}
              title="PDF Viewer"
              style={{ display: isLoading ? 'none' : 'block' }}
            />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

SimplePDFViewer.propTypes = {
  pdfUrl: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired
};

export default SimplePDFViewer;
