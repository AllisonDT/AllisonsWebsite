import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
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
  );
}
