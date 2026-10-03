import { NavLink } from "react-router";

export default function Navbar() {
  let pages = [
    { to: "/", name: "Home" },
    { to: "/about", name: "About" },
    { to: "/products", name: "Products" },
    { to: "/cart", name: "cart" },
  ];
  return (
    <nav className="position-sticky start-0 top-0 d-flex justify-content-evenly align-items-center bg-success py-2 px-4 text-white">
      {pages.map((p) => (
        <NavLink
          key={p.to}
          to={p.to}
          className={({ isActive }) =>
            isActive
              ? "bg-white py-2 px-3 fw-bold rounded-3 text-success "
              : "text-white py-2 px-3 fw-bold"
          }>
          {p.name}
        </NavLink>
      ))}
    </nav>
  );
}
