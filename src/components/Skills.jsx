import SkillCard from "./SkillCard"
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

const skillItem = [
  {
    imgSrc: '/images/figma.svg',
    label: 'Figma',
    desc: 'Design tool'
  },
  {
    imgSrc: '/images/css3.svg',
    label: 'CSS',
    desc: 'Style sheet language'
  },
  {
    imgSrc: '/images/html.jpg',
    label: 'HTML',
    desc: 'Markup language'
  },
  {
    imgSrc: '/images/javascript.svg',
    label: 'JavaScript',
    desc: 'Programming language'
  },
  {
    imgSrc: '/images/typescript-icon.svg',
    label: 'TypeScript',
    desc: 'Superset of JavaScript'
  },
  {
    imgSrc: '/images/nextjs-icon-dark.svg',
    label: 'Next.js',
    desc: 'React framework'
  },
  {
    imgSrc: '/images/sass.svg',
    label: 'Sass',
    desc: 'Extension to CSS'
  },
  {
    imgSrc: '/images/mongodb.svg',
    label: 'MongoDB',
    desc: 'Database'
  },
  {
    imgSrc: '/images/react.svg',
    label: 'React',
    desc: 'JavaScript library'
  },
  {
    imgSrc: '/images/tailwindcss.svg',
    label: 'TailwindCSS',
    desc: 'Utility-first CSS framework'
  },
  {
    imgSrc: '/images/wordpress.jpg',
    label: 'WordPress',
    desc: 'CMS'
  }
];

const Skills = () => {
  return (
    <motion.section
      className='section'
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
        <motion.div className="container">
            <motion.div className="flex flex-col md:flex-row md:justify-between md:items-end gap-4 mb-8">
              <motion.div variants={slideInLeft} className="md:max-w-[60%]">
                <motion.h2
                  className="headline-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Essential Tools I use
                </motion.h2>
                <motion.p
                  className="text-zinc-400 mt-3 max-w-[50ch]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  Discover the powerful tools and technologies I
                  use to create exceptional, high-performing
                  websites & applications.
                </motion.p>
              </motion.div>

              <motion.div
                variants={slideInRight}
                className="hidden md:block"
              >
                <motion.img
                  src="/images/tools-icon1.svg"
                  alt="Tools"
                  width={40}
                  height={40}
                  animate={{
                    y: [0, -30, 0],
                    transition: {
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut"
                    }
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.div
              className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]"
              variants={staggerContainer}
            >
                {
                    skillItem.map(({imgSrc, label, desc}, key) => (
                        <motion.div
                          key={key}
                          variants={slideInUp}
                          custom={key}
                          transition={{ delay: key * 0.05 }}
                        >
                          <SkillCard
                              imgSrc={imgSrc}
                              label={label}
                              desc={desc}
                              animate={true}
                          />
                        </motion.div>
                    ))
                }
            </motion.div>
        </motion.div>
    </motion.section>
  )
}

export default Skills
