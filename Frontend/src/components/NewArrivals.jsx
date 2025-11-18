import { useContext, useEffect, useState } from "react";
import Item from "./Item";
import Title from "./Title";
import { ShopContext } from "../Context/ShopContext";

const NewArrivals = () => {
  const { products } = useContext(ShopContext);
  const [newArrivals, setNewArrivals] = useState([]);

  useEffect(() => {
    const data = products.slice(0, 8);
    setNewArrivals(data);
  }, [products]);

  return (
    <section className="max-padd-container py-16">
      <Title title={"New Arrivals"} titleStyles={"text-center"} />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {newArrivals.map((product) => (
          <div key={product._id}>
            <Item product={product} />
          </div>
        ))}
      </div>
  
    </section>
  );
};

export default NewArrivals;

