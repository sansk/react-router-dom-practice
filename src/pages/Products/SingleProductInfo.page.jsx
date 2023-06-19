import { useOutletContext } from "react-router-dom";

export const SingleProductInfo = () => {
  const { singleProduct } = useOutletContext();

  return (
    <>
      <div className="info-card">
        <div className="info-row">
          <span className="brand">{singleProduct.brand}</span>
          <span className="category">{singleProduct.category}</span>
        </div>
        <div className="desc-row">
          <p>{singleProduct.description}</p>
        </div>
      </div>
    </>
  );
};
