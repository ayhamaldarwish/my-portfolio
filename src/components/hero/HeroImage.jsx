import { motion } from "framer-motion";
import { floatingAnimation, slideInRight } from "../../constants/animationVariants";

/**
 * Component for the hero section image and decorative elements
 */
const HeroImage = () => {
  return (
    <motion.div
      className="hidden lg:block relative"
      variants={slideInRight}
    >
      <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t rounded-[40px] overflow-hidden">
        <img
          src="/images/623503637e979197919c6c03_Topology-1 (1).svg"
          width={656}
          height={800}
          alt="Hero Background"
          className="w-full"
        />
        <motion.img
          src="/images/project-0.jpg"
          alt="Project Preview"
          className="laptop absolute w-[350px] top-8 left-40"
          variants={floatingAnimation}
          animate="animate"
        />
        {/* Decorative elements */}
        <motion.div
          className="imgbox gimg absolute top-[190px] left-[170px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <img src="/images/google2.svg" width={70} alt="Decorative icon" />
        </motion.div>
        <motion.div
          className="imgbox uimg absolute top-[220px] left-[390px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <img src="/images/google.svg" width={60} alt="Decorative icon" />
        </motion.div>
        <motion.div
          className="imgbox wimg absolute top-[5px] left-[310px]"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <img src="/images/google1.svg" width={70} alt="Decorative icon" />
        </motion.div>
      </figure>
    </motion.div>
  );
};

export default HeroImage;
