import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaDownload, FaExclamationTriangle } from 'react-icons/fa';

const PDFErrorMessage = ({ onDownload }) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center h-full">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-red-500 text-5xl mb-4"
      >
        <FaExclamationTriangle />
      </motion.div>
      
      <motion.h3
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-xl font-semibold mb-4 text-red-400"
      >
        Failed to load PDF
      </motion.h3>
      
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-zinc-300 mb-6 max-w-md"
      >
        The PDF file could not be loaded. This might be due to browser restrictions, 
        file access issues, or the file may be missing.
      </motion.p>
      
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.button
          className="btn btn-primary flex items-center gap-2"
          onClick={onDownload}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          <span>Download PDF Instead</span>
        </motion.button>
      </motion.div>
    </div>
  );
};

PDFErrorMessage.propTypes = {
  onDownload: PropTypes.func.isRequired
};

export default PDFErrorMessage;
