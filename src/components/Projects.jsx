import { useState, useEffect } from "react";
import { Container, Row, Col } from 'react-bootstrap';
import axios from "axios";
import Footer from './Footer';
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
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { duration: 0.8, type: "spring", stiffness: 100 } }
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

const Projects = () => {
    const [projects, setProject] = useState([]);

    useEffect(() => {
        axios.get("data.json")
            .then((res) => {
                setProject(res.data.projects)
            })
    }, []);

    return (
        <>
            <motion.section
                className="allprojectsec"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
            >
                <motion.h3
                    variants={slideInLeft}
                    className="mb-4"
                >
                    All Projects
                </motion.h3>

                <motion.img
                    src="images/623503637e979197919c6c03_Topology-1 (1).svg"
                    alt=""
                    className="waves"
                    variants={floatingAnimation}
                    animate="animate"
                />

                <Container>
                    <motion.div variants={staggerContainer}>
                        <Row>
                            {projects.map((project, index) => (
                                <Col md={4} sm={12} key={project.id}>
                                    <motion.div
                                        variants={slideInUp}
                                        transition={{ delay: index * 0.1 }}
                                        whileHover={{
                                            y: -10,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="project-card"
                                    >
                                        <motion.img
                                            src={project.photo}
                                            alt={project.title}
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.3 }}
                                        />
                                        <motion.h5
                                            variants={slideInRight}
                                            transition={{ delay: 0.2 + index * 0.1 }}
                                        >
                                            {project.title}
                                        </motion.h5>
                                        <motion.p
                                            variants={slideInRight}
                                            transition={{ delay: 0.3 + index * 0.1 }}
                                        >
                                            {project.description}
                                        </motion.p>
                                        <motion.a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover="hover"
                                            whileTap="tap"
                                            variants={buttonHoverTap}
                                            className="view-button"
                                        >
                                            View
                                        </motion.a>
                                    </motion.div>
                                </Col>
                            ))}
                        </Row>
                    </motion.div>
                </Container>
            </motion.section>
            <Footer />
        </>
    )
}

export default Projects