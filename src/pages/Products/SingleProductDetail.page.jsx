import { useOutletContext } from "react-router-dom";

export const SingleProductDetail = () => {
  const { singleProduct } = useOutletContext();

  return (
    <>
      <div className="info-card">
        <h1>Details</h1>
        <p>
          Rating: <span>{singleProduct.rating}</span>
        </p>
        <p>
          Stock: <span>{singleProduct.stock} pieces</span>
        </p>
        <p>
          Price: <span>${singleProduct.price}</span>
        </p>
        <p>
          Discount: <span>{singleProduct.discountPercentage}%</span>
        </p>
      </div>
    </>
  );
};
