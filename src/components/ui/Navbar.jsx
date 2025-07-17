import { NavLink } from "react-router-dom";
import clsx from "clsx";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Product", href: "/product" },
  { name: "Cart", href: "/cart" },
];

const Navbar = () => {
  return (
    <nav className="h-full relative ">
      <ul className="flex items-center space-x-4 h-full mr-3">
        {NAV_LINKS.map((link) => (
          <li key={link.name} className="text-2xl ">
            <NavLink
              to={link.href}
              className={({ isActive }) =>
                clsx(
                  isActive
                    ? "border-b-2 font-medium text-[#447D9B]"
                    : "hover:text-[#447D9B]"
                )
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
