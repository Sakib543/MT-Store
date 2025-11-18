import { BsFire } from "react-icons/bs";
import { Link } from "react-router-dom";


const Hero = () => {
  return (
    <section className="max-padd-container max-xl-mt-3 mb-16">
      <div className="max-padd-container bg-hero bg-cover bg-center bg-no-repeat h-[776px] w-full rounded-tl-3xl rounded-tr-3xl mt-6">
        <div className="relative max-w-[777px] top-52">
          <h5 className="flex items-baseline gap-x-2 uppercase text-red-600 medium-22">
            Modern Fashion <BsFire  className="text-red-600"/>
          </h5>
          <h1 className="h1 capitalize max-w-[800px]">Elevate Your Look with Every Click Shop Today</h1>
          <p className="pl-2 max-w-lg mt-6 mb-8 border-l-4 border-red-600 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat
            aperiam sed architecto iusto reiciendis veritatis asperiores modi
          </p>
          <div className="flex gap-2 sm:gap-6 mt-14">
            <Link to="/" className="btn-dark max-sm:!px-3">Latest Product</Link>
            <Link to="/" className="btn-outline max-sm:!px-3">Popular Product</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
