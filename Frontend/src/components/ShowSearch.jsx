import { ShopContext } from "../context/ShopContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

const ShowSearch = () => {
  const { search, setSearch, showSearch, } = useContext(ShopContext);
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("T-Shirts")) {
    setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <section className="py-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center ring-1 ring-slate-900/5 py-1.5 px-3 rounded-md bg-primary overflow-hidden w-full">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search"
            className="border-none outline-none bg-primary w-full text-sm"
          />
          <div className="bg-primary text-center">
            <FiSearch className="cursor-pointer" />
          </div>
        </div>
      </div>
    </section>
  ) : null;
};
export default ShowSearch;
