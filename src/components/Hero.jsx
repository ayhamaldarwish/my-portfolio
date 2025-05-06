import { FaDownload } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";

const scrollToAbout = () => {
  // Add your scroll logic here
  window.scrollTo({ top: 580, behavior: "smooth" }); // Example scroll logic
};

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8 } }
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8 } }
};

const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, delay: 0.3 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const buttonHoverTap = {
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95, transition: { duration: 0.2 } }
};

const Hero = () => {
  return (
    <motion.section
      className="pt-28 lg:pt-36"
      id="home"
      initial="initial"
      animate="animate"
      variants={fadeIn}
    >
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <motion.div variants={staggerContainer}>
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

          <motion.h2
            className="headline-1 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] mt-5 mb-8 lg:mb-10"
            variants={slideInLeft}
            transition={{ delay: 0.2 }}
          >
            Building Scalable Modern Websites for the Future
          </motion.h2>

          <motion.div
            className="flex items-center gap-3"
            variants={slideInLeft}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              href="/File/AYHAM-ALDARWISH-CV.pdf"
              download
              className="btn btn-primary"
              whileHover="hover"
              whileTap="tap"
              variants={buttonHoverTap}
            >
              <span className="flex items-center gap-2">
                Download CV
                <FaDownload />
              </span>
            </motion.a>

            <motion.button
              className="btn btn-outline"
              onClick={scrollToAbout}
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
        </motion.div>

        <motion.div
          className="hidden lg:block relative"
          variants={slideInRight}
        >
          <figure className="w-full max-w-[400px] ml-auto bg-gradient-to-t rounded-[40px] overflow-hidden">
            <img
              src="/images/623503637e979197919c6c03_Topology-1 (1).svg"
              width={656}
              height={800}
              alt="Hero Image"
              className="w-full"
            />
            <motion.img
              src="/images/project-0.jpg"
              alt=""
              className="laptop absolute w-[350px] top-8 left-40"
              variants={floatingAnimation}
              animate="animate"
            />
            <motion.div
              className="imgbox gimg absolute top-[190px] left-[170px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <img src="/images/google2.svg" width={70} alt="" />
            </motion.div>
            <motion.div
              className="imgbox uimg absolute top-[220px] left-[390px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <img src="/images/google.svg" width={60} alt="" />
            </motion.div>
            <motion.div
              className="imgbox wimg absolute top-[5px] left-[310px]"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <img src="/images/google1.svg" width={70} alt="" />
            </motion.div>
          </figure>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
