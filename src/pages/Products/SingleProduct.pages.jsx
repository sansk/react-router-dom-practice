import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

import { useState } from "react";
import axios from "axios";

export const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const url = `https://dummyjson.com/products/${params.id}`;
    console.log({ url });
    axios(url).then((response) => setSingleProduct(response.data));
  }, []);

  console.log("In Single Post: ", singleProduct);

  return (
    <section className="blog-single-post">
      {singleProduct ? (
        <>
          <h1>{singleProduct.title}</h1>
          <img src={singleProduct.thumbnail} alt={singleProduct.title} />
          <p>{singleProduct.description}</p>
          <p>
            Brand:
            <span>{singleProduct.brand}</span>
          </p>
          <p>
            Category: <span>{singleProduct.category}</span>
          </p>
          <p>
            Price:
            <span>${singleProduct.price}</span>
          </p>
        </>
      ) : (
        <div className="loading"></div>
      )}
    </section>
  );
};
