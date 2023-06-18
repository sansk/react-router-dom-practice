import React from "react";
import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">MY BLOG</Link>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "selected" : null)}>
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "selected" : null)}>
            About
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "selected" : null)}>
            Product
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "selected" : null)}>
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "selected" : null)}>
            Contact
          </NavLink>
        </nav>
      </header>
    </>
  );
};
