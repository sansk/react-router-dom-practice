import { Link } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

export const Products = () => {
  const { products } = useBlogContext();

  return (
    <section className="section-blog">
      <h1>Products</h1>
      <div className="product-list">
        {products ? (
          products.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <Link to={`/product/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h1>{product.title}</h1>
                  <p>{product.description.slice(0, 100)}</p>
                  <p className="product-price">${product.price}</p>
                  <button className="btn">{product.category}</button>
                  <button className="btn-brand">{product.brand}</button>
                </Link>
              </div>
            );
          })
        ) : (
          <div className="loading"></div>
        )}
      </div>
    </section>
  );
};
