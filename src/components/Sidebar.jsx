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
    setIsSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Hamburger Menu */}
      <div className="md:hidden p-4 fixed top-4 right-4 z-50">
        <button
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
          className="text-gray-900 focus:outline-none"
        >
          {isSidebarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar */}
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

      {/* Overlay when Sidebar is Open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Sidebar;
