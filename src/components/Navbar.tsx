import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "Who We Are", path: "#about" },
  { name: "Services", path: "#services" },
  { name: "Projects", path: "#projects" },
  { name: "Team", path: "#team" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLinkClick = (e: React.MouseEvent, path: string) => {
    if (path.startsWith("#")) {
      if (location.pathname === "/") {
        e.preventDefault();
        scrollToSection(path);
      } else {
        // If not on home page, will navigate to "/" then scroll via hash
        // (Handled by standard browser behavior or extra logic if needed)
      }
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 h-20 flex items-center transition-all ${scrolled ? "glass-header" : "bg-transparent"
          }`}
      >
        <div className="section-container flex items-center justify-between">

          {/* LOGO */}
          <Link
            to="/"
            onClick={(e) => {
              if (location.pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center"
          >
            <span className="text-xl font-extrabold tracking-[0.1em] uppercase">
              TRICON
            </span>
            <span className="text-xl ml-1 tracking-[0.1em] uppercase">
              STUDIOS
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path.startsWith("#") ? `/${link.path}` : link.path}
                onClick={(e) => handleLinkClick(e, link.path)}
                className={`nav-link ${location.pathname === link.path ? "text-black font-semibold" : ""
                  }`}
              >
                {link.name}
              </Link>
            ))}

            <Link
              to="/contact"
              className="bg-primary rounded-full text-primary-foreground px-6 py-3 text-xs uppercase tracking-[0.05em]"
            >
              Start a Project
            </Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button onClick={() => setMobileOpen(true)} className="md:hidden">
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center gap-8"
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6"
            >
              <X size={24} />
            </button>

            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  to={link.path.startsWith("#") ? `/${link.path}` : link.path}
                  onClick={(e) => {
                    handleLinkClick(e, link.path);
                    setMobileOpen(false);
                  }}
                  className={`text-2xl font-semibold uppercase ${location.pathname === link.path ? "text-black" : "text-neutral-500"
                    }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;