import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScaleLoader from "react-spinners/ScaleLoader";

/* components */
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Services from "./components/Services";

/* pages */
import ViewAll from "./pages/ViewAll";

const HomePage = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Work />
        <Services/>
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton />
    </>
  );
};

const App = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [])

  return (
    <>
      {loading ? (
        <div className="preloaderr flex items-center justify-center h-screen bg-zinc-900">
          <ScaleLoader loading={loading} height={100} margin={10} color="#38BDF8" />
        </div>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/viewall" element={<ViewAll />} />
          </Routes>
          <ScrollToTopButton />
        </Router>
      )}
    </>
  );
};

export default App;
