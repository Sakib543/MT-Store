import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";
import { TbArrowNarrowRight } from "react-icons/tb";
import logo from "../assets/logo.png";
import { ShopContext } from "../context/ShopContext";



const navItems = [
  { name: "Home", href: "/" },
  { name: "T-Shirts", href: "/T-Shirts" },
  { name: "Hoodies", href: "/Hoodies" },
  { name: "Printed Shirts", href: "/Printed-Shirts" },
  { name: "Track Suits", href: "/tracksuits" },
  { name: "About Us", href: "/About-Us" },
];

const Header = () => {
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [isMenuVisible, setMenuVisible] = useState(false);
  const [token, setToken] = useState(false);
  const navigate = useNavigate();
  const {setShowSearch, getCartCount} = useContext(ShopContext);


  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };

  const toggleShowSearch = () => {
    setSearchVisible((prev) => !prev);
  };
  
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <>
      <div className="bg-gray-800 p-2 text-white text-center">
        FREE SHIPPING ON ORDERS ABOVE 5000 PKR
      </div>

      <div className="relative flex items-center justify-between px-6 md:px-20">
        <div className="md:hidden flex">
          <button onClick={toggleMenu} className="text-gray-800">
            {isMenuVisible ? <FiX /> : <FiMenu />}{" "}
            {/* Toggle between FiX and FiMenu */}
          </button>
        </div>

        <div className="hidden md:flex items-center relative">
          <button onClick={()=>setShowSearch((prev)=> !prev)} className="pr-4 cursor-pointer z-10">
            <FiSearch className="text-xl" onClick={toggleShowSearch} />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className={`bg-transparent outline-none transition-all duration-300 ease-in-out ${
              isSearchVisible ? "w-32" : "w-0"
            }`}
            style={{
              opacity: isSearchVisible ? "1" : "0",
              visibility: isSearchVisible ? "visible" : "hidden",
              position: "absolute",
              left: "30px",
            }}
          />
        </div>

        <div className="flex-shrink-0 text-center">
          <Link to={"/"}>
            <img src={logo} alt="logo" width={100} height={100} />
          </Link>
        </div>

        <div className="relative flex items-center gap-5">
          <Link to="/cart">
            <FiShoppingCart className="cursor-pointer text-xl" />
            <span className="absolute top-0 right-0 -mt-2 mr-7 bg-gray-600 text-white text-xs font-semibold rounded-full w-4 h-4 flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>
          <div className="text-xl relative group">
            <Link to="/login">
              <FiUser className="cursor-pointer" />
            </Link>
            {token && (
              <>
                <ul className="bg-white shadow-sm p-3 w-32 ring-1 ring-slate-900/15 rounded absolute right-0 hidden group-hover:flex flex-col z-10">
                  <li
                    onClick={() => navigate("/orders")}
                    className="flexBetween cursor-pointer"
                  >
                    <p>Orders</p>
                    <TbArrowNarrowRight className="text-[19px] opacity-50" />
                  </li>
                  <hr className="my-2" />
                  <li onClick={logout} className="flexBetween cursor-pointer">
                    <p>LogOut</p>
                    <TbArrowNarrowRight className="text-[19px] opacity-50" />
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>
      </div>

      <div
        className={`bg-transparent text-dark md:hidden transition-all duration-500 ease-in-out ${
          isMenuVisible
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
    <nav className="flex flex-col items-center gap-3 py-2">
  {navItems.map((item, index) => (
    <Link
      key={index}
      to={item.href}
      onClick={() => setMenuVisible(false)}
      className={`flex items-center gap-1 py-2 px-3 ${item.href === window.location.pathname ? 'active-link' : ''}`}
    >
      {item.name}
    </Link>
  ))}
</nav>
      </div>

      <div className="hidden md:flex justify-center gap-12 py-2 shadow-md">
  {navItems.map((item, index) => (
    <Link
      key={index}
      to={item.href}
      className={`font-normal text-xl text-dark hover:text-gray-900 flex items-center gap-1 ${item.href === window.location.pathname ? 'active-link' : ''}`}
    >
      {item.name}
    </Link>
  ))}
</div>
    </>
  );
};

export default Header;
