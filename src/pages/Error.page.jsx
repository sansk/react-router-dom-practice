import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <section className="section-blog">
        <h1 style={{ margin: "2rem" }}>Something is not right!</h1>
        <Link to="/" className="back-home-btn">
          Back to Home Page!
        </Link>
      </section>
    </>
  );
};
