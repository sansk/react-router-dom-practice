import { useEffect } from "react";
import {
  useParams,
  NavLink,
  Link,
  Outlet,
  useLocation,
} from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

import { useState } from "react";
import axios from "axios";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const params = useParams();

  const location = useLocation();
  const queryParam = location.state?.search || "";

  useEffect(() => {
    const url = `https://dummyjson.com/products/${params.id}`;
    axios(url).then((response) => setSingleProduct(response.data));
  }, []);

  return (
    <section className="blog-single-post">
      <Link to={`..${queryParam}`} relative="path" className="back-button">
        &larr; <span>Back to All Products</span>
      </Link>

      {singleProduct ? (
        <>
          <h1>{singleProduct.title}</h1>
          <img src={singleProduct.thumbnail} alt={singleProduct.title} />

          <nav className="single-prod-menu">
            <NavLink
              to="."
              end
              className={({ isActive }) => (isActive ? "sub-select" : null)}>
              Info
            </NavLink>
            <NavLink
              to="detail"
              className={({ isActive }) => (isActive ? "sub-select" : null)}>
              Details
            </NavLink>
            <NavLink
              to="images"
              className={({ isActive }) => (isActive ? "sub-select" : null)}>
              Images
            </NavLink>
          </nav>

          <Outlet context={{ singleProduct }} />
        </>
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};
