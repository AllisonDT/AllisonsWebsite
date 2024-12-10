import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Schooling from "./components/Schooling";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-pink-50 text-pink-800 font-sans">
        {/* Sidebar */}
        <aside className="bg-pink-500 text-white w-64 py-8 px-4 fixed h-full shadow-lg">
          <h1 className="text-3xl font-bold text-center mb-10">
            Allison 💖
          </h1>
          <nav className="space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-lg hover:bg-pink-600 ${
                  isActive ? "bg-pink-600" : ""
                }`
              }
              end
            >
              About Me
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-lg hover:bg-pink-600 ${
                  isActive ? "bg-pink-600" : ""
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-lg hover:bg-pink-600 ${
                  isActive ? "bg-pink-600" : ""
                }`
              }
            >
              Skills
            </NavLink>
            <NavLink
              to="/schooling"
              className={({ isActive }) =>
                `block py-2 px-4 rounded-lg hover:bg-pink-600 ${
                  isActive ? "bg-pink-600" : ""
                }`
              }
            >
              Schooling
            </NavLink>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="ml-64 p-8 w-full">
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/schooling" element={<Schooling />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
