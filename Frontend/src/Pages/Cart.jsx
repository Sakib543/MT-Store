import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa6";
import CartTotal from "../components/CartTotal";

const Cart = () => {
  const { getCartCount, cartItems, products, currency, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const tempData = [];
    const initialQuantities = {};
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
          initialQuantities[`${items}-${item}`] = cartItems[items][item];
        }
      }
    }
    setCartData(tempData);
    setQuantities(initialQuantities);
  }, [cartItems]);

  const increment = (id, size) => {
    const key = `${id}-${size}`;
    const newValue = quantities[key] + 1;
    setQuantities((prev) => ({ ...prev, [key]: newValue }));
    updateQuantity(id, size, newValue);
  };
  const decrement = (id, size) => {
    const key = `${id}-${size}`;
    if (quantities[key] > 0) {
      const newValue = quantities[key] - 1;
      setQuantities((prev) => ({ ...prev, [key]: newValue }));
      updateQuantity(id, size, newValue);
    }
  };
  return (
    <section>
      <div className="max-padd-container ">
        <div className="max-padd-container py-10 rounded-2xl bg-white my-6 max-xl xl:mt-3 shadow-md">
          <div className="flex items-baseline gap-x-2">
            <h3 className="h3">
              Cart <span className="text-red-600">List</span>
            </h3>
            <p className="text-secondary bold-20">{getCartCount()} items</p>
          </div>
          <div className="mt-6">
            {cartData.map((item, i) => {
              const productData = products.find(
                (product) => product._id === item._id
              );
              const key = `${item._id}-${item.size}`;

              return (
                <div key={i} className="p-1 rounded-lg">
                  <div className="items-center flex gap-x-2">
                    <div className="flex items-start gap-6">
                      <img
                        src={productData.image[0]}
                        alt=""
                        className="w-16 sm:w-18 rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col w-full">
                      <div className="flexBetween ">
                        <h5 className="h5 !my-0 line-clamp-1">
                          {productData.name}
                        </h5>
                        <MdOutlineDeleteForever
                          onClick={() => updateQuantity(item._id, item.size, 0)}
                          className="text-secondary text-2xl cursor-pointer"
                        />
                      </div>
                      <p className="bold-14 my-0.5">{item.size}</p>
                      <div className="flexBetween">
                        <div className="flex items-center ring-1 ring-slate-900/5 rounded-full overflow-hidden bg-primary">
                          <button className="p-1.5 bg-white text-red-600 rounded-full shadow-md">
                            <FaMinus
                              onClick={() => decrement(item._id, item.size)}
                              className="cursor-pointer text-xs"
                            />
                          </button>
                          <p className="px-2">{quantities[key]}</p>
                          <button className="p-1.5 bg-white text-red-600 rounded-full shadow-md">
                            <FaPlus
                              onClick={() => increment(item._id, item.size)}
                              className="cursor-pointer text-xs"
                            />
                          </button>
                        </div>
                        <h4 className="h4 text-red-600 medium-18">
                          {currency}
                          {productData.price}
                        </h4>
                      </div>
                    </div>
                  </div>
                  <hr className="mx-auto my-2 w-full h-[-1px] bg-gray-900/5 mt-2 " />
                </div>
              );
            })}
          </div>
          <div className="flex my-16">
        <div className="w-full sm:w-[500px]">
        <CartTotal />
        <hr className="mx-auto my-2 w-full h-[-1px] bg-gray-900/5 mt-2 " />
        <button onClick={()=> navigate ('/place-order')} className="w-full md:w-[200px] mt-3 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 ">
        Proceed to Checkout
        </button>
          </div>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Cart;
