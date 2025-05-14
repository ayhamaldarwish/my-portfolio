import { motion } from "framer-motion";
import { FaDownload, FaArrowDown } from "react-icons/fa";
import PropTypes from 'prop-types';
import { buttonHoverTap } from "../../constants/animationVariants";

/**
 * Component for the buttons in the hero section
 */
const HeroButtons = ({ onOpenPdfViewer, onScrollToAbout }) => {
  return (
    <motion.div
      className="flex items-center gap-3"
      variants={buttonHoverTap}
      transition={{ delay: 0.4 }}
    >
      <motion.button
        onClick={onOpenPdfViewer}
        className="btn btn-primary"
        whileHover="hover"
        whileTap="tap"
        variants={buttonHoverTap}
      >
        <span className="flex items-center gap-2">
          View CV
          <FaDownload />
        </span>
      </motion.button>

      <motion.button
        className="btn btn-outline"
        onClick={onScrollToAbout}
        whileHover="hover"
        whileTap="tap"
        variants={buttonHoverTap}
      >
        <span className="flex items-center gap-2">
          Scroll down
          <FaArrowDown />
        </span>
      </motion.button>
    </motion.div>
  );
};

HeroButtons.propTypes = {
  onOpenPdfViewer: PropTypes.func.isRequired,
  onScrollToAbout: PropTypes.func.isRequired
};

export default HeroButtons;
