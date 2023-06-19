import { Link, useSearchParams } from "react-router-dom";
import { useBlogContext } from "../../context/BlogContext";

export const Products = () => {
  const [searchparams, setSearchParams] = useSearchParams();
  const brandFilter = searchparams.get("brand");

  const { products } = useBlogContext();
  console.log(products);

  let brandProducts = products;

  if (products) {
    brandProducts = brandFilter
      ? products.filter((product) =>
          product.brand.toLowerCase().includes(brandFilter.toLowerCase())
        )
      : products;
  }

  const handleSearchParams = (key, value) => {
    setSearchParams((prevParams) => {
      value === null ? prevParams.delete(key) : prevParams.set(key, value);
      return prevParams;
    });
  };

  return (
    <section className="section-blog">
      <h1>Products</h1>
      <nav>
        <div className="brand-filter">
          <button
            onClick={() => handleSearchParams("brand", "apple")}
            className={`${brandFilter === "apple" ? "select" : ""}`}>
            Apple
          </button>
          <button
            onClick={() => handleSearchParams("brand", "samsung")}
            className={`${brandFilter === "samsung" ? "select" : ""}`}>
            Samsung
          </button>
          <button
            onClick={() => handleSearchParams("brand", "oppo")}
            className={`${brandFilter === "oppo" ? "select" : ""}`}>
            OPPO
          </button>
          <button
            onClick={() => handleSearchParams("brand", "hp")}
            className={`${brandFilter === "hp" ? "select" : ""}`}>
            HP
          </button>
          <button
            onClick={() => handleSearchParams("brand", "microsoft")}
            className={`${brandFilter === "microsoft" ? "select" : ""}`}>
            Microsoft
          </button>
          {brandFilter ? (
            <button onClick={() => handleSearchParams("brand", null)}>
              Clear
            </button>
          ) : null}
        </div>
      </nav>
      <div className="product-list">
        {brandProducts ? (
          brandProducts.map((product) => {
            return (
              <div key={product.id} className="product-card">
                <Link to={`${product.id}`}>
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
