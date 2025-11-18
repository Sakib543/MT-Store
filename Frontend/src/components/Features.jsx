import Title from "./Title";

import { products } from "../assets/data";
import { Link } from "react-router-dom";

const Features = () => {
    return (
        <section className="max-padd-container py-10 gap-6">
        <Title title={'Features Collection'} titleStyles={'text-center'} />
        <div className="grid grid-cols-2 gap-6 md:grid-cols-2">
          {/* Men's T-Shirts */}
          <Link to={"/T-Shirts"} className="rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src={products[0].image}
                alt="Men's T-Shirts"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black text-white bg-opacity-40 flexCenter group-hover:opacity-100 transition-opacity duration-300 hover:underline">
                <p className="text-white text-md text-center md:text-lg font-semibold">MENS T-SHIRTS</p>
              </div>
            </div>  
          </Link>
      
          {/* Oversized Graphic Hoodies */}
          <Link to={"/Hoodies"} className="rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src={products[1].image}
                alt="Oversized Graphic Hoodies"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black text-white bg-opacity-40 flexCenter group-hover:opacity-100 transition-opacity duration-300 hover:underline">
                <p className="text-white text-center md:text-lg font-semibold">OVERSIZED GRAPHIC HOODIES</p>
              </div>
            </div>
          </Link>
      
          {/* Oversized Graphic Tees */}
          <Link to={"/Printed-Shirts"} className="rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src={products[2].image}
                alt="Oversized Graphic Tees"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black  text-white bg-opacity-40 flexCenter group-hover:opacity-100 transition-opacity duration-300 hover:underline">
                <p className="text-white text-center md:text-lg font-semibold">OVERSIZE GRAPHIC TEEZ</p>
              </div>
            </div>
          </Link>
      
          {/* Trousers */}
          <Link to={"/Trousers"} className="rounded-lg overflow-hidden">
            <div className="relative group">
              <img
                src={products[4].image}
                alt="Trousers"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-black text-white bg-opacity-40 flexCenter group-hover:opacity-100 transition-opacity duration-300 hover:underline">
                <p className="text-white text-center md:text-lg font-semibold">TROUSERS</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      );
    };

export default Features