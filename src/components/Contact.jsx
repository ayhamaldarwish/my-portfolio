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
    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
    transition: { duration: 0.2 }
  },
  tap: {
    scale: 0.95,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
    transition: { duration: 0.1 }
  }
};

const socialLinks = [
  {
    href: "https://github.com/ayhamaldarwish",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C6.48603 2 2 6.48604 2 12C2 17.514 6.48603 22 12 22C17.514 22 22 17.514 22 12C22 6.48604 17.514 2 12 2ZM12 3.5C16.7033 3.5 20.5 7.2967 20.5 12C20.5 15.8327 17.9785 19.0613 14.5 20.126V17.5684C14.5 16.6133 13.9497 15.7943 13.1543 15.3867C13.9276 15.2388 14.6457 14.9454 15.249 14.5309C15.8522 14.1165 16.3232 13.5929 16.6228 13.0037C16.9224 12.4145 17.0421 11.7765 16.9718 11.1429C16.9015 10.5093 16.6434 9.89818 16.2188 9.36035C16.4405 8.67771 16.6883 7.48034 16.0996 6.53809C14.9647 6.53809 14.2323 7.31604 13.8828 7.7998C13.2853 7.60352 12.6459 7.5017 12 7.5C11.3537 7.50057 10.7136 7.60139 10.1152 7.79688C9.76487 7.31289 9.03311 6.53809 7.90039 6.53809C7.22486 7.61941 7.64246 8.78228 7.86621 9.25684C7.41288 9.79235 7.12862 10.4078 7.03781 11.0505C6.94699 11.6931 7.05233 12.3438 7.34478 12.9468C7.63723 13.5498 8.10809 14.087 8.71698 14.5124C9.32587 14.9379 10.0546 15.2389 10.8408 15.3896C10.1877 15.7262 9.69864 16.337 9.54883 17.0781H8.8916C8.2431 17.0781 7.99112 16.8146 7.64062 16.3701C7.29463 15.9256 6.92259 15.6269 6.47559 15.5029C6.23459 15.4774 6.07223 15.6607 6.28223 15.8232C6.99173 16.3062 7.0407 17.0968 7.3252 17.6143C7.5842 18.0803 8.11484 18.5 8.71484 18.5H9.5V20.126C6.02153 19.0613 3.5 15.8327 3.5 12C3.5 7.2967 7.29669 3.5 12 3.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/ayham-aldarwish-582410274/",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.75 3C4.24011 3 3 4.24011 3 5.75V18.25C3 19.7599 4.24011 21 5.75 21H18.25C19.7599 21 21 19.7599 21 18.25V5.75C21 4.24011 19.7599 3 18.25 3H5.75ZM5.75 4.5H18.25C18.9491 4.5 19.5 5.05089 19.5 5.75V18.25C19.5 18.9491 18.9491 19.5 18.25 19.5H5.75C5.05089 19.5 4.5 18.9491 4.5 18.25V5.75C4.5 5.05089 5.05089 4.5 5.75 4.5ZM7.75 6.5C7.41848 6.5 7.10054 6.6317 6.86612 6.86612C6.6317 7.10054 6.5 7.41848 6.5 7.75C6.5 8.08152 6.6317 8.39946 6.86612 8.63388C7.10054 8.8683 7.41848 9 7.75 9C8.08152 9 8.39946 8.8683 8.63388 8.63388C8.8683 8.39946 9 8.08152 9 7.75C9 7.41848 8.8683 7.10054 8.63388 6.86612C8.39946 6.6317 8.08152 6.5 7.75 6.5ZM7 10C6.7235 10 6.5 10.2235 6.5 10.5V17C6.5 17.2765 6.7235 17.5 7 17.5H8.5C8.7765 17.5 9 17.2765 9 17V10.5C9 10.2235 8.7765 10 8.5 10H7ZM10.5 10C10.2235 10 10 10.2235 10 10.5V17C10 17.2765 10.2235 17.5 10.5 17.5H12C12.2765 17.5 12.5 17.2765 12.5 17V13.25C12.5 12.5605 13.0605 12 13.75 12C14.4395 12 15 12.5605 15 13.25V17C15 17.2765 15.2235 17.5 15.5 17.5H17C17.2765 17.5 17.5 17.2765 17.5 17V13C17.5 11.3455 16.1545 10 14.5 10C13.731 10 13.0315 10.293 12.5 10.7705V10.5C12.5 10.2235 12.2765 10 12 10H10.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "LinkedIn",
  },
  {
    href: "",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Twitter X",
  },
  {
    href: "https://www.instagram.com/_x.17a/",
    icon: (
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z"
          fill="currentColor"
        />
      </svg>
    ),
    alt: "Instagram",
  },
];

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="section"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeIn}
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        {/* Left Column - Contact Info */}
        <motion.div
          className="mb-12 lg:mb-0 lg:flex lg:flex-col"
          variants={slideInLeft}
        >
          <motion.h2
            className="headline-2 lg:max-w-[12ch]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Contact me for collaboration
          </motion.h2>

          <motion.p
            className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Reach out today to discuss your project needs and start
            collaborating on something amazing!
          </motion.p>

          {/* Floating Image */}
          <motion.div
            className="hidden lg:block mb-6"
            variants={floatingAnimation}
            animate="animate"
          >
            <img
              src="/images/contact-icon1.svg"
              alt="Contact"
              width={40}
              height={40}
            />
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-2 mt-auto"
            variants={staggerContainer}
          >
            {socialLinks.map(({ href, icon, alt }, key) => (
              <motion.a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg transition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80"
                variants={slideInUp}
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.9,
                  rotate: 0,
                  transition: { duration: 0.1 }
                }}
                aria-label={alt}
                custom={key}
                transition={{ delay: key * 0.1 }}
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.form
          action="https://getform.io/f/bwnnjnna"
          className="xl:pl-10 2xl:pl-20"
          method="POST"
          variants={slideInRight}
        >
          <motion.div
            className="md:grid md:items-center md:grid-cols-2 md:gap-2"
            variants={staggerContainer}
          >
            <motion.div
              className="mb-4"
              variants={slideInUp}
            >
              <motion.label
                htmlFor="name"
                className="label"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Name
              </motion.label>
              <motion.input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="ex: Ayham Aldarwish"
                className="text-field"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileFocus={{
                  boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
            <motion.div
              className="mb-4"
              variants={slideInUp}
            >
              <motion.label
                htmlFor="email"
                className="label"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                Email
              </motion.label>
              <motion.input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="ex: ayham@gmail.com"
                className="text-field"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileFocus={{
                  boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.3)",
                  transition: { duration: 0.2 }
                }}
              />
            </motion.div>
          </motion.div>
          <motion.div
            className="mb-4"
            variants={slideInUp}
          >
            <motion.label
              htmlFor="message"
              className="label"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              Message
            </motion.label>
            <motion.textarea
              name="message"
              id="message"
              className="text-field resize-y min-h-32 max-h-80"
              placeholder="Hi!"
              required
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              whileFocus={{
                boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.3)",
                transition: { duration: 0.2 }
              }}
            ></motion.textarea>
          </motion.div>
          <motion.button
            className="btn btn-primary [&]:max-w-full w-full justify-center"
            type="submit"
            variants={buttonHoverTap}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 1.1,
              type: "spring",
              stiffness: 100
            }}
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default Contact;
