import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import { slideInLeft, staggerContainer } from "../../constants/animationVariants";
import HeroButtons from "./HeroButtons";

/**
 * Component for the main content of the hero section
 */
const HeroContent = ({ onOpenPdfViewer, onScrollToAbout }) => {
  return (
    <motion.div variants={staggerContainer}>
      {/* Profile badge */}
      <motion.div
        className="flex items-center gap-3"
        variants={slideInLeft}
      >
        <figure className="img-box w-9 h-9 rounded-lg">
          <img
            src="/images/heroo.jpg"
            width={40}
            height={40}
            alt="Ayham Aldarwish"
            className="img-cover"
          />
        </figure>

        <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide ">
          <span className="relative w-2 h-2 rounded-full bg-emerald-400">
            <span className="absolate inset-0 rounded-full bg-emerald-400 animate-ping"></span>
          </span>
          Available for work
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h2
        className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
        variants={slideInLeft}
        transition={{ delay: 0.2 }}
      >
        Building Scalable Modern Websites for the Future
      </motion.h2>

      {/* Action buttons */}
      <HeroButtons 
        onOpenPdfViewer={onOpenPdfViewer} 
        onScrollToAbout={onScrollToAbout} 
      />
    </motion.div>
  );
};

HeroContent.propTypes = {
  onOpenPdfViewer: PropTypes.func.isRequired,
  onScrollToAbout: PropTypes.func.isRequired
};

export default HeroContent;
