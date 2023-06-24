// components/Navbar.js
"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
const navLinks = [
  { label: "About Us", href: "#about", id: "about" },
  { label: "Campaign", href: "#campaign", id: "Campaign" },
  { label: "Contact Us", href: "#contactUs", id: "contactUs" },

];
export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navLinkContainer}>
        {navLinks.map((link) => (
          <li key={link.id}>
            <a
              className={pathname === link.href ? styles.active : ""}
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
