import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Survey Table", link: "/surveys" },
  { name: "Setup Guide", link: "/guide" },
  { name: "Survey Metrics", link: "/metrics" },
  { name: "Info", link: "/info" },
];

const Sidebar = () => {
  const [active, setActive] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleActive = (id) => {
    setActive(id);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="md:hidden p-4">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? "Close" : "Open"}
        </button>
      </div>
      <div
        className={`bg-gray-900 text-white fixed top-0 left-0 h-full shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 z-50`}
      >
        <div className="p-6">
          <h2 className="text-xl font-semibold">Welcome John 👋</h2>
        </div>
        <nav className="mt-8">
          <ul>
            {navLinks.map((link, i) => (
              <li key={i}>
                <Link
                  to={link.link}
                  onClick={() => handleActive(i)}
                  className={`block px-4 py-2 rounded-lg transition-all duration-300 ${
                    active === i ? "bg-indigo-600" : "hover:bg-gray-700"
                  }`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
