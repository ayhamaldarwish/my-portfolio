import { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import Footer from "../components/Footer";
import Header from "../components/Header";

// Animation variants
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

const slideInLeft = {
  initial: { x: -100, opacity: 0 },
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

/* // Remove the unused buttonHoverTap variable
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
}; */

const ViewAll = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setLoading(true);
    axios.get("/data.json")
      .then((res) => {
        setProjects(res.data.projects);
        setFilteredProjects(res.data.projects);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching projects:", error);
        setLoading(false);
      });
  }, []);

  // Filter projects based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProjects(filtered);
    }
  }, [searchTerm, projects]);

  return (
    <>
      <Header />
      <motion.section
        className="section pt-32"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <motion.h1
              className="headline-1"
              variants={slideInLeft}
            >
              All Projects
            </motion.h1>

            <div className="flex flex-col md:flex-row items-center gap-3">
              <motion.div
                className="w-full md:w-64"
                variants={slideInLeft}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <motion.input
                  type="text"
                  placeholder="Search projects..."
                  className="text-field w-full"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  whileFocus={{
                    boxShadow: "0 0 0 2px rgba(56, 189, 248, 0.3)",
                    transition: { duration: 0.2 }
                  }}
                />
              </motion.div>

              <motion.div
                variants={slideInLeft}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link to="/">
                  <motion.button
                    className="btn btn-outline flex items-center gap-2 whitespace-nowrap"
                    whileHover={{
                      scale: 1.05,
                      x: -5,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      transition: { duration: 0.1 }
                    }}
                  >
                    <IoArrowBack />
                    <span>Back to Home</span>
                  </motion.button>
                </Link>
              </motion.div>
            </div>
          </div>

          {filteredProjects.length === 0 && !loading && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-xl mb-2">No projects found</h3>
              <p className="text-zinc-400">Try a different search term</p>
              <motion.button
                className="btn btn-primary mt-4"
                onClick={() => setSearchTerm("")}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 }
                }}
              >
                Show All Projects
              </motion.button>
            </motion.div>
          )}

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sky-400"></div>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="project-card"
                  variants={slideInUp}
                  custom={index}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <motion.img
                    src={project.photo}
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.h3 className="text-xl font-semibold mb-2">{project.title}</motion.h3>
                  <motion.p className="text-zinc-400 text-sm mb-4">{project.description}</motion.p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="view-button"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0px 5px 15px rgba(56, 189, 248, 0.3)",
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{
                      scale: 0.95,
                      boxShadow: "0px 2px 5px rgba(56, 189, 248, 0.2)",
                      transition: { duration: 0.1 }
                    }}
                  >
                    View Project
                  </motion.a>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </motion.section>
      <Footer />
    </>
  );
};

export default ViewAll;

