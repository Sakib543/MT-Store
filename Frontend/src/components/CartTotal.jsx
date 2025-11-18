import { useContext } from "react";
import { ShopContext } from "../context/ShopContext";



const CartTotal = () => {
const { getCartAmount, currency,delivery_charge } = useContext(ShopContext);

  return (
<div className="w-full">
    <h3 className="bold-22 mt-5">Cart <span className=" text-red-600">Total</span></h3>
    <div className="flexBetween pt-3">
        <h4 className="h4">SubTotal</h4>
       <p className="bold-16">{currency}{getCartAmount()}.00</p>
    </div>
    <hr className="mx-auto my-2 w-full h-[-1px] bg-gray-900/5 mt-2 " />
    <div className="flexBetween pt-3">
        <h4 className="h4">Shipping Fee:</h4>
        <p className="bold-16">{getCartAmount() === 0 ? "0.00" : `${currency} ${delivery_charge}.00`}</p>
    </div>
    <hr className="mx-auto my-2 w-full h-[-1px] bg-gray-900/5 mt-2 " />
    <div className="flexBetween pt-3">
        <h4 className="h4">Total:</h4>
        <p className="bold-16">{currency}{getCartAmount() === 0 ? 0.00 : getCartAmount() + delivery_charge}.00</p>
    </div>
</div>

  )
}

export default CartTotal;
