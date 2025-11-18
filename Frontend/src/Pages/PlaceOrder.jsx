import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Footer from "../components/Footer";

const PlaceOrder = () => {
const [method, setMethod] = useState("cod");

  const {
    navigate,
    cartItems,
    products,
    currency,
    getCartAmount,
    delivery_charge = 10, // Default delivery charge
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const itemId in cartItems) {
      for (const size in cartItems[itemId]) {
        if (cartItems[itemId][size] > 0) {
          const product = products.find((p) => p._id === itemId);
          tempData.push({
            _id: itemId,
            size,
            quantity: cartItems[itemId][size],
            name: product?.name || "Unknown Product",
            image: product?.image || [],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems, products]);

  return (
   
    <section className="max-padd-container">
    <div className="flex flex-col lg:flex-row lg:space-x-8 p-6">
      {/* Left Section */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-6 sm:order-1 order-2">
        {/* Contact Section */}
        <section>
          <h2 className="text-lg font-bold mb-4">Contact</h2>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email or mobile phone number"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
          <div className="mb-4 flex items-center">
            <input type="checkbox" id="newsletter" className="mr-2" />
            <label htmlFor="newsletter" className="text-sm">
              Email me with news and offers
            </label>
          </div>
        </section>

        {/* Delivery Section */}
        <section className="mt-6">
          <h2 className="text-lg font-bold mb-4">Delivery</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="border border-gray-300 rounded-lg p-3 text-sm"
            />
            <input
              type="text"
              placeholder="Last name"
              className="border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Apartment, suite, etc. (optional)"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="City"
              className="border border-gray-300 rounded-lg p-3 text-sm"
            />
            <input
              type="text"
              placeholder="Postal code (optional)"
              className="border border-gray-300 rounded-lg p-3 text-sm"
            />
          </div>
          <div className="mb-4 relative">
            <input
              type="text"
              placeholder="Phone"
              className="w-full border border-gray-300 rounded-lg p-3 text-sm pl-10"
            />
            <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer group text-bold">
              ?
              <div className="absolute hidden group-hover:block bg-gray-700 text-white text-xs rounded-lg p-2 w-48 top-0 left-12 z-10">
                Enter a valid phone number we can use to contact you for
                delivery updates.
              </div>
            </span>
          </div>

          <div className="mb-4 flex items-center">
            <input type="checkbox" id="save-info" className="mr-2" />
            <label htmlFor="save-info" className="text-sm">
              Save this information for next time
            </label>
          </div>
        </section>

        {/* Shipping Method */}
        {/* <section className="mt-6">
          <h2 className="text-lg font-bold mb-4">Shipping Method</h2>
          <div className="border border-gray-500 bg-gray-100 p-3 rounded-lg flex justify-between items-center">
            <span className="text-sm">Standard</span>
            <span className="font-semibold">
              {currency}
              {delivery_charge}.00
            </span>
          </div>
        </section> */} 
      </div>
      {/* Right Section */}
      <div className="w-full lg:w-1/3 p-6 mt-6 lg:mt-0 bg-white shadow-md rounded-lg sm:order-2 mb-5 order-2">
        <h3 className="text-lg font-bold mb-5">
          Order <span className="text-red-600">Summary</span>
        </h3>
        <div>
          {cartData.length > 0 ? (
            cartData.map((item) => (
              <div
                key={`${item._id}-${item.size}`}
                className="flex items-start gap-6 mb-4"
              >
                <div className="relative w-16 sm:w-18">
                  <img
                    src={item.image[0]}
                    alt={item.name}
                    className="rounded-lg"
                  />
                  {item.quantity > 0 && (
                    <span className="absolute top-0 right-0 -mt-2 -mr-2  bg-gray-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-lg">
                      {item.quantity}
                    </span>
                  )}
                </div>
                <div>
                  <h5 className="h5 !my-0 line-clamp-1">{item.name}</h5>
                  <p className="text-sm">{item.size}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
        <div className="flex justify-between pt-3">
          <h4 className="text-sm font-medium">SubTotal</h4>
          <p className="font-semibold">
            {currency}
            {getCartAmount()}.00
          </p>
        </div>
        <hr className="my-2 w-full border-gray-200" />
        <div className="flex justify-between pt-3">
          <h4 className="text-sm font-medium">Shipping Fee:</h4>
          <p className=" font-semibold">
            {getCartAmount() === 0
              ? "0.00"
              : `${currency}${delivery_charge}.00`}
          </p>
        </div>
        <hr className="my-2 w-full border-gray-200" />
        <div className="flex justify-between pt-3">
          <h4 className="text-sm font-medium">Total:</h4>
          <p className="text-lg font-bold">
            {currency}
            {getCartAmount() === 0
              ? "0.00"
              : (getCartAmount() + delivery_charge).toFixed(2)}
          </p>
        </div>
        {/* Payment Section */}
        <section className="my-6">
          <h2 className="bold-20 mb-5">Payment <span className=" text-red-600">Method</span></h2>
          <div className="flex gap-3">
            <button onClick={()=>setMethod("Stripe")} className={`${method === "stripe" ? "text-secondary" : ""} btn-light w-full`}>
              <span className="text-sm">Stripe</span>
            </button>
             <button onClick={()=>setMethod("cod")} className={`${method === "cod" ? "text-secondary" : ""} btn-light w-full`}>
              <span className="text-sm">Cash on Delivery</span>
            </button>
          </div>
          {/* <div className="border border-gray-500 bg-gray-100 p-3 rounded-lg mb-4">
            <span className="text-sm ">Cash on Delivery (COD)</span>
          </div> */}
        </section>
        <div className="flex flex-col items-center">
          <button
            onClick={() => navigate("/orders")}
            className="w-full md:w-[200px] mt-3 py-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 "
          >
            Place Order
          </button>
        </div>
      </div>
   
    </div>
       <Footer/>
       </section>
  );
};

export default PlaceOrder;
