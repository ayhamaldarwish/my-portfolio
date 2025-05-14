/**
 * Configuration constants for PDF handling
 */

// CV file path and name
export const CV_FILE = {
  path: '/File/AYHAM-ALDARWISH-FlowCV.pdf',
  filename: 'AYHAM-ALDARWISH-FlowCV.pdf'
};

// Get the full URL for the CV file
export const getFullCvUrl = () => {
  return `${window.location.origin}${CV_FILE.path}`;
};

// PDF viewer options
export const PDF_VIEWER_OPTIONS = {
  // Default to simple viewer for better compatibility
  useSimpleViewerByDefault: true,

  // Options for react-pdf
  reactPdfOptions: {
    cMapUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/cmaps/',
    cMapPacked: true,
    standardFontDataUrl: 'https://unpkg.com/pdfjs-dist@3.4.120/standard_fonts/',
    withCredentials: false,
  }
};
