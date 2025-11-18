import { useState, useEffect, useContext } from "react";
import { ShopContext } from "../context/ShopContext"; // Make sure to import ShopContext
import Title from "../components/Title";
import Item from "../components/Item";
import ShowSearch from "../components/ShowSearch";
import Footer from "../components/Footer";



const Tshirts = () => {
  const {products, search, showSearch } = useContext(ShopContext);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 1000]); 
  const [categoryFilters, setCategoryFilters] = useState([]);
  // const [typeFilters, setTypeFilters] = useState([]);
  const [sortOption, setSortOption] = useState("relevant");

  // Filter products based on price, category, and type
  useEffect(() => {
    let filtered = products.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );
    if(search && showSearch){
      filtered = filtered.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilters.length > 0) {
      filtered = filtered.filter((product) =>
        categoryFilters.includes(product.category)
      );
    }

    // Sort products based on selected option
    if (sortOption === "low") {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (sortOption === "high") {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filtered);
  }, [products, priceRange, categoryFilters, sortOption, search, showSearch]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) =>
      name === "min" ? [Number(value), prev[1]] : [prev[0], Number(value)]
    );
  };


  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    setCategoryFilters((prev) =>
      checked ? [...prev, value] : prev.filter((category) => category !== value)
    );
  };



  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  return (
    <section className="max-padd-container">
      <img
        className="bg-center bg-no-repeat h-[300px] w-full rounded-xl mt-8"
        src="../src/assets/T-shirt-banner.png"
        alt="T-shirt Banner"
      />
      <div className="flex flex-col sm:flex-row gap-8 mt-9 xl:mt-6">
       
        {/* Filters */}
        <div className="min-w-[250px] bg-white p-4 rounded-2xl shadow-sm">
          {/* Search Bar */}
       <ShowSearch/>
          {/* Category Filter */}
          <div className="bg-primary ring-1 ring-slate-900/5 pl-5 py-3 mt-6 rounded-md">
            <h5 className="font-semibold mb-4">T-SHIRTS</h5>
            <div className="flex flex-col gap-2 text-sm font-light">
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="flex gap-2 medium-10 text-gray-30">
                  <input
                    type="checkbox"
                    name="category"
                    value={cat}
                    className="w-3"
                    onChange={handleCategoryChange}
                  />
                  {cat}
                </label>
              ))}
            </div>
          </div>


          {/* Price Range Slider */}
          <div className="bg-primary ring-1 ring-slate-900/5 pl-3 py-3 mt-6 rounded-md">
            <h5 className="font-semibold mb-4">Price Range</h5>
            <div className="flex items-center text-sm gap-4">
              <div className="flex items-center gap-1">
                <label htmlFor="min" className="font-light text-gray-30">
                  Min:
                </label>
                <input
                  type="number"
                  id="min"
                  name="min"
                  className="w-14 p-1 border border-gray-300 rounded"
                  value={priceRange[0]}
                  onChange={handlePriceChange}
                  min={0}
                />
              </div>
              <div className="flex items-center gap-2">
                <label htmlFor="max" className="font-light text-gray-30">
                  Max:
                </label>
                <input
                  type="number"
                  id="max"
                  name="max"
                  className="w-14 p-1 border border-gray-300 rounded"
                  value={priceRange[1]}
                  onChange={handlePriceChange}
                  max={1000}
                />
              </div>
            </div>
            <input
              type="range"
              min="0"
              max="1000"
              step="10"
              value={priceRange[1]}
              onChange={(e) =>
                setPriceRange([priceRange[0], Number(e.target.value)])
              }
              className="w-full mt-4"
            />
          </div>

          {/* Sort By */}
          <select
            className="medium-14 w-full border border-ring-1 border-slate-900/5 py-2 mt-6 rounded-md bg-primary text-gray-30 outline-none"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option value="relevant" className="font-medium text-sm">
              Sort By - Relevant
            </option>
            <option value="low" className="font-medium text-sm">
              Sort By: Low to High
            </option>
            <option value="high" className="font-medium text-sm">
              Sort By: High to Low
            </option>
          </select>
        </div>

        {/* Right Side - Product Grid */}
        <div className="p-4 rounded-2xl">
          <Title title={"T-Shirts"} titleStyles={""} />
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <Item product={product} key={product._id} />
              ))
            ) 
            :
             (
              <p className="text-center capitalize text-3xl font-semibold">No products found</p>
            )}
          </div>
        </div>
      </div>
      
      <Footer/>
    </section>
  );
};

export default Tshirts;