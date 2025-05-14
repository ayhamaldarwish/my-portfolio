import { motion } from "framer-motion";

const aboutItems = [
  {
    label: "Project done",
    number: 4,
  },
  {
    label: "Years of experience",
    number: 2,
  },
];

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

const slideInBottom = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.6, type: "spring", stiffness: 100 } }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const numberAnimation = {
  initial: { opacity: 0, scale: 0.5 },
  animate: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      duration: 0.8 
    }
  }
};

const About = () => {
  return (
    <motion.section 
      id="about" 
      className="section"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
        <div className="container">
            <motion.div 
              className="bg-zinc-800/50 p-7 rounded-2xl md:p-12"
              variants={slideInBottom}
              whileHover={{ 
                boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
                transition: { duration: 0.3 }
              }}
            >
              <motion.ul 
                className="list-disc text-zinc-300 mb-4 md:mb-8 md:text-xl w-full"
                variants={staggerContainer}
              >
                <motion.li
                  variants={slideInLeft}
                >
                  I'm Ayham Aldarwish, a Web Developer with over 2 years of experience
                  in designing and developing responsive websites and web
                  applications. My focus is on delivering functional, user-friendly,
                  and visually appealing digital solutions that align with client
                  goals and business requirements.
                </motion.li>
                <br />
                <motion.li
                  variants={slideInLeft}
                >
                  <motion.b
                    initial={{ color: "#94a3b8" }}
                    animate={{ color: "#38bdf8" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    Technical Skills: 
                  </motion.b>
                  <br />
                  <motion.div
                    variants={staggerContainer}
                  >
                    <motion.div variants={slideInLeft}>
                      1. Front-end development: Building responsive layouts and interactive interfaces.
                    </motion.div>
                    <br />
                    <motion.div variants={slideInLeft}>
                      2. UI/UX design: Creating clear and effective designs using Figma.
                    </motion.div>
                    <br />
                    <motion.div variants={slideInLeft}>
                      3. WordPress development: Custom themes, plugin integration, and
                      performance optimization.
                    </motion.div>
                    <br />
                    <motion.div variants={slideInLeft}>
                      4. Problem-solving: Debugging and enhancing
                      website performance.
                    </motion.div>
                    <br />
                    <motion.div variants={slideInLeft}>
                      5. Collaboration: Working closely with clients,
                      designers, and teams to meet project deadlines.
                    </motion.div>
                  </motion.div>
                </motion.li>
                <br />
                <motion.li
                  variants={slideInLeft}
                >
                  <motion.b
                    initial={{ color: "#94a3b8" }}
                    animate={{ color: "#38bdf8" }}
                    transition={{ duration: 1, delay: 0.7 }}
                  >
                    What I Deliver:
                  </motion.b> {""}
                  Websites that are responsive, fast, and easy to navigate. Solutions
                  that combine clean design with practical functionality. Attention to
                  detail in both design and code. A focus on user experience and
                  business goals. 
                </motion.li>
                <br />
                <motion.li
                  variants={slideInLeft}
                >
                  I'm always looking for opportunities to contribute
                  to projects where quality and performance matter. If you need a
                  reliable developer who can deliver results efficiently, I'd be happy
                  to connect and discuss your next project.
                </motion.li>
              </motion.ul>
              
              <motion.div 
                className="flex flex-warp items-center gap-4 md:gap-7"
                variants={staggerContainer}
              >
                {aboutItems.map(({ label, number }, key) => (
                  <motion.div 
                    key={key}
                    variants={slideInBottom}
                    whileHover={{ y: -5, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-center md:mb-2">
                      <motion.span 
                        className="text-2xl font-semibold md:text-4xl"
                        variants={numberAnimation}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true }}
                      >
                        {number}
                      </motion.span>
                      <motion.span 
                        className="text-sky-400 font-semibold md:text-3xl"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          transition: { 
                            duration: 1.5, 
                            repeat: Infinity,
                            repeatDelay: 2
                          }
                        }}
                      >
                        +
                      </motion.span>
                    </div>
                    <p className="text-sm text-zinc-400">{label}</p>
                  </motion.div>
                ))}
                <motion.img
                  src="/images/logo.jpg"
                  alt="Logo"
                  width={30}
                  height={30}
                  className="ml-auto md:w-[40px] md:h-[40px]"
                  variants={slideInRight}
                  whileHover={{ 
                    rotate: 360,
                    transition: { duration: 0.8, ease: "easeInOut" }
                  }}
                  animate={floatingAnimation.animate}
                />
              </motion.div>
            </motion.div>
        </div>
    </motion.section>
  );
};

export default About;
