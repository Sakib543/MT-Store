import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const SearchResults = () => {
  const { products, search } = useContext(ShopContext);

  // Filter products based on the search query
  const filtered = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Search Results for {search}</h1>
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="border p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{product.name}</h2>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found.</p>
      )}
    </div>
  );
};

export default SearchResults;
