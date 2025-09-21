import { useState } from "react";
import { NavLink, useNavigate,Link} from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Add Agent", path: "/add-agent" },
    { name: "All Agents", path: "/all-agents" },
    { name: "Upload CSV", path: "/upload" },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white p-4 flex justify-between items-center sticky top-0 z-50 shadow-lg">
      {/* Logo */}
      <div
        className="text-2xl font-bold text-white cursor-pointer hover:text-accent transition-colors"
        onClick={() => navigate("/dashboard")}
      >
        LeadManager
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6 items-center ">
        {links.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              isActive
                ? "text-white border-b-2 border-accent pb-1"
                : "text-white hover:text-cyan-200 transition-colors"
            }
          >
            {link.name}
          </NavLink>
        ))}
        <button
          className="bg-white text-indigo-500 hover:cursor-pointer hover:text-indigo-600 px-3 py-1 rounded transition-colors"
        >
         <Link to="/login">Login</Link> 
        </button>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <HiX size={28} className="text-white" /> : <HiMenu size={28} className="text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute right-4 top-16 bg-primary w-44 rounded shadow-lg flex flex-col p-4 space-y-3 md:hidden text-white bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-white border-b-2 border-accent pb-1"
                  : "text-white hover:text-cyan-200 transition-colors"
              }
            >
              {link.name}
            </NavLink>
          ))}
          <button
            className="bg-white text-indigo-500 hover:cursor-pointer hover:text-indigo-600  px-3 py-1 rounded transition-colors"
          >
           <Link to="/login">Login</Link> 
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
