import { GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

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
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut"
    }
  }
};

const buttonHoverTap = {
  hover: {
    scale: 1.05,
    x: 5,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.1 }
  }
};

const linkHover = {
  initial: { x: 0 },
  hover: {
    x: 5,
    color: "#e2e8f0",
    transition: { duration: 0.2 }
  }
};


const sitemap = [
    {
        label: 'Home',
        href: '#home'
    },
    {
        label: 'About',
        href: '#about'
    },
    {
        label: 'Work',
        href: '#work'
    },
    {
        label: 'Reviews',
        href: '#reviews'
    },
    {
        label: 'Contact me',
        href: '#contact'
    }
];

const socials = [
    {
        label: 'GitHub',
        href: 'https://github.com/ayhamaldarwish'
    },
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/ayham-aldarwish-582410274/'
    },
    {
        label: 'Twitter X',
        href: ''
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/_x.17a/'
    },
];

const Footer = () => {
return (
    <motion.footer
      className="section"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
        <div className="container">
            <div className="lg:grid lg:grid-cols-2">
                {/* Left Column */}
                <motion.div
                  className="mb-10"
                  variants={slideInLeft}
                >
                    <motion.h2
                      className="headline-1 mb-8 lg:max-w-[12ch]"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Let&apos;s work together today!
                    </motion.h2>

                    {/* Floating Image */}
                    <motion.div
                      className="hidden lg:block mb-6"
                      variants={floatingAnimation}
                      animate="animate"
                    >
                    </motion.div>

                    <motion.a
                      href="https://wa.me/+905396700366?text=let's go"
                      className="btn btn-primary"
                      whileHover="hover"
                      whileTap="tap"
                      variants={buttonHoverTap}
                    >
                        <motion.span className="flex items-center gap-2">
                            Start project
                            <motion.span
                              animate={{
                                x: [0, 5, 0],
                                transition: {
                                  duration: 1.5,
                                  repeat: Infinity,
                                  repeatDelay: 1
                                }
                              }}
                            >
                              <GoChevronRight />
                            </motion.span>
                        </motion.span>
                    </motion.a>
                </motion.div>

                {/* Right Column */}
                <motion.div
                  className="grid grid-cols-2 gap-4 lg:pl-20"
                  variants={slideInRight}
                >
                    {/* Sitemap Links */}
                    <motion.div variants={staggerContainer}>
                        <motion.p
                          className="mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          Sitemap
                        </motion.p>
                        <motion.ul variants={staggerContainer}>
                            {sitemap.map(({label, href}, key)=>(
                                <motion.li
                                  key={key}
                                  variants={slideInUp}
                                  custom={key}
                                  transition={{ delay: 0.5 + (key * 0.1) }}
                                >
                                    <motion.a
                                      href={href}
                                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                      whileHover="hover"
                                      variants={linkHover}
                                    >
                                        {label}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div variants={staggerContainer}>
                        <motion.p
                          className="mb-2"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.6 }}
                        >
                          Socials
                        </motion.p>
                        <motion.ul variants={staggerContainer}>
                            {socials.map(({label, href}, key)=>(
                                <motion.li
                                  key={key}
                                  variants={slideInUp}
                                  custom={key}
                                  transition={{ delay: 0.7 + (key * 0.1) }}
                                >
                                    <motion.a
                                      href={href}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                      whileHover="hover"
                                      variants={linkHover}
                                    >
                                      {label}
                                    </motion.a>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                </motion.div>
            </div>

            {/* Footer Bottom */}
            <motion.div
              className="flex items-center justify-between pt-10 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.2 }}
            >
                <motion.a
                  href=""
                  whileHover={{ rotate: 360, transition: { duration: 0.8 } }}
                >
                    <motion.img
                      src="/images/logo.jpg"
                      alt="Logo"
                      width={40}
                      height={40}
                      animate={{
                        rotate: [0, 10, 0, -10, 0],
                        transition: {
                          duration: 6,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }
                      }}
                    />
                </motion.a>
                <motion.p
                  className="text-zinc-500 text-sm"
                  whileHover={{ color: "#e2e8f0", transition: { duration: 0.3 } }}
                >
                    &copy; 2025 <motion.span
                      className="text-zinc-200"
                      whileHover={{
                        color: "#38bdf8",
                        transition: { duration: 0.3 }
                      }}
                    >
                      Ayham Aldarwish
                    </motion.span>
                </motion.p>
            </motion.div>
        </div>
    </motion.footer>
)
}

export default Footer
