import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <header>
        <Link to="/">MY BLOG</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
    </>
  );
};
