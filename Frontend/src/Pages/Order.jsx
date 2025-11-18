import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";

const Order = () => {
  const { products, currency } = useContext(ShopContext);
  console.log(products);

  return (
    <section>
      <div className="max-padd-container">
        <div className="max-padd-container py-10 bg-white rounded-2xl my-6 max-xl:mt-08">
          <div className="">
            <h3 className="h3">
              Order<span className="text-red-600">List</span>
            </h3>
          </div>

          {/* container */}
          {products.slice(1, 3).map((item, i) => (
            <div key={i}>
              <div className="py-4 text-gray-700 flex flex-col gap-4">
                <div className="flex gap-x-3 w-full">
                  {/* Image */}
                  <div className="flex gap-6">
                    <img
                      src={item.image}
                      alt=""
                      className="w-[77px] rounded-lg"
                    />
                  </div>
                  {/* Order info */}
                  <div className="block w-full">
                    <h5 className="h5 capitalize line-clamp-1">{item.name}</h5>
                    <div className="flexBetween">
                      <div>

                      <div className="flex items-center gap-x-2 sm:gap-x-3">
                        <div className="flexCenter gap-x-2">
                          <h5 className="medium-14">Price:</h5>
                          <p className="text-red-600 medium-16">
                            {currency}
                            {item.price}
                          </p>
                          <p className="line-through">
                            {currency}
                            {item.originalPrice} 
                          </p>
                        </div>
                        <div className="flexCenter gap-x-2">
                          <h5 className="medium-14">Quantity:</h5>
                          <p className="medium-16">{item.quantity}</p>
                        </div>
                        <div className="flexCenter gap-x-2">
                          <h5 className="medium-14">Size:</h5>
                          <p className="medium-16">{item.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <h5 className="medium-14">Date:</h5>
                        <p className="medium 14 text-gray-400">
                          {new Date(item.date).toDateString()}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-2">
                        <h5 className="medium-14">Payment:</h5>
                        <p className="text-gray-400 medium-14">{item.paymentMethod}</p>
                      </div>
                    </div>
                    {/* Status & button */}
                    <div className="flex flex-col xl:flex-row gap-3">
                      <div className="flex items-center gap-2">
                        <p className="min-w-2 h-2 rounded-full bg-green-400"></p>
                        <p>Status</p>
                      </div>
                      <button className="btn-secondary !p-1.5 !text-xs">
                        Track Order
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="mx-auto my-2 w-full h-[-1px] bg-gray-900/5 mt-2 " />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Order;
