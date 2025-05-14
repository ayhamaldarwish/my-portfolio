import { pdfjs } from 'react-pdf';

// Set up the worker for PDF.js
// Try multiple sources to increase reliability
const setupPdfWorker = () => {
  try {
    // First try to use the CDN version
    const cdnWorkerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
    pdfjs.GlobalWorkerOptions.workerSrc = cdnWorkerSrc;
    console.log('PDF.js worker set to CDN source');
    return cdnWorkerSrc;
  } catch (error) {
    console.error('Error setting up PDF.js worker from CDN:', error);

    try {
      // Fallback to unpkg
      const unpkgWorkerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
      pdfjs.GlobalWorkerOptions.workerSrc = unpkgWorkerSrc;
      console.log('PDF.js worker set to unpkg source');
      return unpkgWorkerSrc;
    } catch (fallbackError) {
      console.error('Error setting up PDF.js worker from unpkg:', fallbackError);

      // Last resort - try to use a local worker if available
      console.log('Attempting to use local PDF.js worker');
      return null;
    }
  }
};

const pdfWorkerSrc = setupPdfWorker();

export default pdfWorkerSrc;
