/* eslint-disable react/prop-types */
// Product card component
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Product = ({ product, productDispatch, cartDispatch }) => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      const getProducts = async () => {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${params.id}`
        );
        // console.log(response.data);
        productDispatch({ type: "PRODUCT", payload: response.data });
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [params.id, productDispatch]);

  const handlePrevious = () => {
    navigate("/");
  };

  const goToCart = () => {
    cartDispatch({ type: "addToCart", payload: product });
    navigate("/carts");
  };

  return (
    <>
      <button
        onClick={handlePrevious}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-md mb-4"
      >
        Go to Products
      </button>
      <div className="bg-gray-100 min-h-screen flex justify-center items-center">
        <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 w-[80%]">
          <h1 className="text-2xl font-semibold mb-4">{product.title}</h1>
          <div className="flex flex-col">
            <div>
              <img
                src={product.image}
                alt={product.title}
                className="w-[20%] mx-auto h-auto"
              />
            </div>
            <div className=" ml-4">
              <p className="text-gray-700 mx-auto mb-4">
                {product.description}
              </p>
              <div className="flex items-center mb-2">
                <span className="text-green-600 font-semibold">
                  {product.price}
                </span>
                <span className="text-gray-600 ml-2">Rating: </span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-600">Category:</span>
              </div>
            </div>
            {/*Add to Cart  */}
            <div className="flex justify-center mt-4">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-500"
                onClick={goToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
