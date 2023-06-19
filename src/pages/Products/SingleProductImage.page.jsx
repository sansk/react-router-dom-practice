import { useOutletContext } from "react-router-dom";

export const SingleProductImage = () => {
  const { singleProduct } = useOutletContext();

  return (
    <>
      <div className="info-card">
        <h1>Images</h1>
        <div className="image-list">
          {singleProduct.images.map((image) => (
            <img src={image} alt="Image" />
          ))}
        </div>
      </div>
    </>
  );
};
