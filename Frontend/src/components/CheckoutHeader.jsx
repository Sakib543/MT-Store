
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";





const CheckoutHeader = () => {
  return (
    <>
      <div className="max-padd-container bg-primary shadow-md relative flex items-center justify-between px-3 md:px-32">
        <div className="flex-shrink-0 text-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>
      </div>
    </>
  );
};

export default CheckoutHeader;
