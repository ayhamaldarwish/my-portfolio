import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

// Animation variants for the card
const cardHoverTap = {
  hover: {
    scale: 1.03,
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    backgroundColor: "rgba(39, 39, 42, 0.8)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.98,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.1 }
  }
};

// Animation for the icon
const iconAnimation = {
  hover: {
    rotate: [0, 5, -5, 0],
    scale: 1.1,
    transition: { duration: 0.5 }
  }
};

const SkillCard = ({
    imgSrc,
    label,
    desc,
    classes,
    animate = false
}) => {
  return (
    <motion.div
      className={'flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 group ' + classes}
      whileHover="hover"
      whileTap="tap"
      variants={cardHoverTap}
    >
        <motion.figure
          className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors flex items-center justify-center'
          variants={iconAnimation}
        >
            <motion.img
                src={imgSrc}
                alt={label}
                width={32}
                height={32}
                animate={animate ? {
                  y: [0, -3, 0],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: Math.random() * 2 // Random delay for each icon
                  }
                } : {}}
            />
        </motion.figure>
        <div>
            <motion.h3
              initial={animate ? { opacity: 0, y: 10 } : {}}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {label}
            </motion.h3>
            <motion.p
              className='text-zinc-400 text-sm'
              initial={animate ? { opacity: 0, y: 10 } : {}}
              animate={animate ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
                {desc}
            </motion.p>
        </div>
    </motion.div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
    animate: PropTypes.bool
}

export default SkillCard;