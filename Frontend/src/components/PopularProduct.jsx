import { useState, useEffect  } from "react";
import Title from "./Title";
import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "./Item";


const PopularProduct = () => {

  const { products } = useContext(ShopContext);
  const [popularProducts, setPopularProducts] = useState([]);

  useEffect(() => {
    const data = products.filter((item) => item.popular);
    setPopularProducts(data.slice(0, 8));
  }, [products]);


  return (
    <div className="max-padd-container py-16">
      <Title title={"Popular Products"} titleStyles={"text-center"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {popularProducts.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
        </div>
    </div>
  );
};

export default PopularProduct;
