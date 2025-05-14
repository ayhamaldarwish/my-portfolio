import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
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

// Layout component that includes common elements
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <ScrollToTopButton />
    </>
  );
};

const HomePage = () => {
  return (
    <>
      <main>
        <Hero />
        <About />
        <Work />
        <Services/>
        <Contact />
      </main>
      <Footer />
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

  // Create router with future flags to address the warning
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/viewall" element={<ViewAll />} />
      </Route>
    ),
    {
      // Opt-in to the new behavior early
      future: {
        v7_relativeSplatPath: true,
        v7_startTransition: true
      }
    }
  );

  return (
    <>
      {loading ? (
        <div className="preloaderr flex items-center justify-center h-screen bg-zinc-900">
          <ScaleLoader loading={loading} height={100} margin={10} color="#38BDF8" />
        </div>
      ) : (
        <RouterProvider router={router} />
      )}
    </>
  );
};

export default App;
