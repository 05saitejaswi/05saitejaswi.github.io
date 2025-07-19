import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import SystemDesign from "./pages/SystemDesign";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Nav from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Nav />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/system-design" element={<SystemDesign />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* ✅ Global Footer here */}
        <footer className="text-center py-8 text-sm text-gray-500 dark:text-gray-400">
          Made with ❤️ by Sai Tejaswi Chakravaram — Atlanta, GA
        </footer>
      </div>
    </Router>
  );
};

export default App;
