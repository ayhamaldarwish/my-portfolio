import { AnimatePresence } from "framer-motion";
import PropTypes from 'prop-types';
import PDFViewer from "../PDFViewer";
import SimplePDFViewer from "../SimplePDFViewer";
import { getFullCvUrl } from "../../constants/pdfConfig";

/**
 * Wrapper component for PDF viewers with fallback support
 */
const PDFViewerWrapper = ({ isVisible, useSimpleViewer, onClose, onError }) => {
  if (!isVisible) return null;
  
  const pdfUrl = getFullCvUrl();
  
  return (
    <AnimatePresence>
      {useSimpleViewer ? (
        <SimplePDFViewer
          pdfUrl={pdfUrl}
          onClose={onClose}
        />
      ) : (
        <PDFViewer
          pdfUrl={pdfUrl}
          onClose={onClose}
          onError={onError}
        />
      )}
    </AnimatePresence>
  );
};

PDFViewerWrapper.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  useSimpleViewer: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onError: PropTypes.func
};

export default PDFViewerWrapper;
