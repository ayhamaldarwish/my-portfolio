import { useState, useEffect } from "react";
import axios from "axios";
import { GoArrowRight } from "react-icons/go";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
};

const slideInRight = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
};

const slideInUp = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
};

const floatingAnimation = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

/* const buttonHoverTap = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.1 }
  }
}; */

const Work = () => {
  const [projects, setProject] = useState([]);
  useEffect(() => {
    axios.get("data.json")
      .then((res) => {
        setProject(res.data.projects)
      })
  }, [])
  return (
    <motion.section
      id='work'
      className='section'
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
        <motion.div className="container">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
            <motion.h2
              className="headline-2 mb-8"
              variants={slideInLeft}
            >
              My portfolio highlights
            </motion.h2>

            <motion.div
              variants={slideInRight}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              whileTap={{
                scale: 0.95,
                transition: { duration: 0.1 }
              }}
            >
              <Link
                to="/viewall"
                className="btn btn-primary mb-6 sm:text-sm"
              >
                <motion.span
                  className="flex items-center gap-2"
                  transition={{ duration: 0.2 }}
                >
                  View
                  <span className="hidden sm:inline">All</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 1
                    }}
                  >
                    <GoArrowRight />
                  </motion.span>
                </motion.span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={slideInUp}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              type: "spring",
              stiffness: 50
            }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              freeMode={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 1,
                },
                768: {
                  width: 768,
                  slidesPerView: 2,
                },
              }}
              modules={[FreeMode, Pagination]}
              className="mySwiper"
            >
              {projects.slice(0, 11).map((project, index) => (
                <SwiperSlide key={project.id}>
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1 * index,
                      type: "spring"
                    }}
                    whileHover={{ y: -10, transition: { duration: 0.3 } }}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <motion.img
                        src={project.photo}
                        alt={project.title || "Project image"}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                        className="rounded-lg shadow-lg"
                        variants={floatingAnimation}
                        animate="animate"
                      />
                    </a>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </motion.section>
  )
}

export default Work
