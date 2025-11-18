/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import Title from "./Title";
import { ShopContext } from "../context/ShopContext";
import Item from "./Item";
import { Swiper, SwiperSlide } from "swiper/react";
 // Import Swiper's styles

const RelatedProducts = () => {
  const { products } = useContext(ShopContext);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      setRelated(products.slice(0, 8)); // Limit to the first 8 products for the slider
    }
  }, [products]);

  return (
    <div className="max-padd-container py-16 flex flex-col gap-y-12">
      <Title title="Related Products" />
      <div className="relative">
        {/* SwiperJS Slider */}
        <Swiper
          slidesPerView={2}  // Default number of items per slide
          spaceBetween={20}   // Space between slides
          breakpoints={{
            640: {
              slidesPerView: 2, // On smaller screens, show 2 slides
            },
            768: {
              slidesPerView: 3, // On medium screens, show 3 slides
            },
            1024: {
              slidesPerView: 4, // On larger screens, show 4 slides
            },
          }}
          navigation // Adds default Swiper navigation (prev/next arrows)
          loop // Loop through slides
          className="swiper-container"
        >
          {related.length === 0 ? (
            <p className="text-center text-gray-500">No related products found.</p>
          ) : (
            related.map((product) => (
              <SwiperSlide key={product._id}>
                <Item product={product} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default RelatedProducts;
