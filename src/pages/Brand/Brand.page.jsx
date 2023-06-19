import { Link, useSearchParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

export const Brand = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const brandFilter = searchparams.get("brand");

  const { products } = useBlogContext();
  console.log(products);

  let brandProducts = products;

  if (products) {
    brandProducts = brandFilter
      ? products.filter(
          (product) => product.brand.toLowerCase() === brandFilter.toLowerCase()
        )
      : products;
  }

  return (
    <>
      <section className="section-blog">
        <h1>Products</h1>
        <div className="product-list">
          {brandProducts ? (
            brandProducts.map((product) => {
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
    </>
  );
};
