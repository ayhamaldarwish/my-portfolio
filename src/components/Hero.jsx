import { motion } from "framer-motion";
import { useState } from "react";
import { fadeIn } from "../constants/animationVariants";
import { PDF_VIEWER_OPTIONS } from "../constants/pdfConfig";
import HeroContent from "./hero/HeroContent";
import HeroImage from "./hero/HeroImage";
import PDFViewerWrapper from "./hero/PDFViewerWrapper";

/**
 * Hero section component
 * Displays the main hero section with animated content, buttons, and PDF viewer
 */
const Hero = () => {
  // State for PDF viewer
  const [showPdfViewer, setShowPdfViewer] = useState(false);
  const [useSimpleViewer, setUseSimpleViewer] = useState(
    PDF_VIEWER_OPTIONS.useSimpleViewerByDefault
  );

  // Scroll to About section
  const scrollToAbout = () => {
    window.scrollTo({ top: 580, behavior: "smooth" });
  };

  // PDF viewer handlers
  const openPdfViewer = (e) => {
    e.preventDefault();
    setShowPdfViewer(true);
  };

  const closePdfViewer = () => {
    setShowPdfViewer(false);
  };

  // Handle fallback if the advanced viewer fails
  const handleAdvancedViewerError = () => {
    console.log('Switching to simple PDF viewer');
    setUseSimpleViewer(true);
  };

  return (
    <motion.section
      className="pt-28 lg:pt-36"
      id="home"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      {/* PDF Viewer */}
      <PDFViewerWrapper
        isVisible={showPdfViewer}
        useSimpleViewer={useSimpleViewer}
        onClose={closePdfViewer}
        onError={handleAdvancedViewerError}
      />

      {/* Main content */}
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        {/* Left column - Text content */}
        <HeroContent
          onOpenPdfViewer={openPdfViewer}
          onScrollToAbout={scrollToAbout}
        />

        {/* Right column - Image */}
        <HeroImage />
      </div>
    </motion.section>
  );
};

export default Hero;
