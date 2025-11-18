import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { FaHeart, FaStar, FaStarHalfStroke, FaTruck } from "react-icons/fa6";
import { TbShoppingBagPlus } from "react-icons/tb";
import Footer from "../components/Footer";
// import RelatedProduct from "../components/RelatedProduct";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart} = useContext(ShopContext);
  const [product, setProduct] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    const selectedProduct = products.find((item) => item._id === productId);
    if (selectedProduct) {
      setProduct(selectedProduct);
      setImage(selectedProduct.image[0]);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  if (!product) {
    return <div>Loading...</div>
  }
  return (
 
      <section className="max-padd-container">
        <div className="max-padd-container mt-8 xl:mt-8">
          {/* card data */}
          <div className="max-padd-container flex flex-col gap-12 md:flex-row xl:flex-row bg-white py-10 rounded-2xl">
            {/* product image */}
            <div className="flex flex-1 gap-x-2 xl:flex-row ">
              <div className="flexCenter flex-col gap-[7px] flex-wrap gap-y-2">
                {product.image.map((item, i) => (
                  <img
                    src={item}
                    key={i}
                    alt="productImg"
                    onClick={() => setImage(item)}
                    className="max-h-[89px] rounded-lg"
                  />
                ))}
              </div>
              <div className="max-h-[377px] w-auto flex">
                <img src={image} alt="" className="rounded-xl bg-gray-200" />
              </div>
            </div>
            {/* product info */}
            <div className="flex-[1.5] rounded-2xl px-7">
              <h3 className="h3 capitalize !my-2.5">{product.name}</h3>
              {/* rating and price */}
              <div className="flex items-baseline gap-x-2">
                <h3 className="h3">{currency}</h3>
                <h3 className="h3 text-red-600">{product.price}.00</h3>
                <h5 className="h4 text-gray-400 line-through">
                  {product.originalPrice}.00
                </h5>
                <div className="flex items-center gap-x-2 text-secondary mb-2">
                  <div className="flex gap-x-2 text-yellow-400 text-xl">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStarHalfStroke />
                  </div>
                  <span>(122)</span>
                </div>
              </div>
              <p>{product.description}</p>

              <div className="gap-2 my-2 mb-5">
                <h2 className="h4">Sizes</h2>
                <div className="flex gap-2">
                  {[...product.sizes]
                    .sort((a, b) => {
                      const order = ["S", "M", "L", "XL", "XXL"];
                      return order.indexOf(a) - order.indexOf(b);
                    })
                    .map((item, i) => (
                      <button
                        onClick={() => setSize(item)}
                        key={i}
                        className={`${
                          item === size
                            ? "bg-tertiary text-white"
                            : "border-slate-900/50"
                        } border-[1.5px] border-tertiary h-8 w-10 bg-primary rounded-md`}
                      >
                      {item}
                      </button>
                    ))}
                </div>
              </div>
              <div className="flex sm:flex-row flex-col w-[400px] gap-2">
                <button onClick={()=>addToCart(product._id, size)} className="btn-dark gap-x-2 w-1/2 flexCenter capitalize hover:bg-secondary duration-300">
                  Add to cart
                  <TbShoppingBagPlus className="text-xl" />
                </button>
                <button className="btn-dark gap-x-2 w-1/2 flexCenter capitalize hover:bg-secondary duration-300">
                  Buy it Now <FaHeart className="text-xl" />
                </button>
              </div>
              <div className="flex items-center gap-x-4 text-md mt-4">
                <FaTruck className="text-red-600 text-xl" />
                <span className="medium-14 text-red-600">
                  Free Delivery on order over Rs: 5000
                </span>
              </div>
              <hr className="my-4 w-2/3" />
              <div className="flex flex-col gap-1 mt-2">
                <p>Authenticity you Can Trust</p>
                <p>Enjoy cash on delivery for your Convenience</p>
                <p>Easy Return and exchanges within 7 Days</p>
              </div>
            </div>
          </div>
        </div>
{/* <RelatedProduct/> */}
        <Footer/>
      </section>
      

  );
};

export default Product;
