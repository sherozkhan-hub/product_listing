/* eslint-disable react/prop-types */
// Product card component
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProductList = ({ products, productDispatch }) => {
  const navigate = useNavigate();
  // console.log(products);
  useEffect(() => {
    try {
      const getProducts = async () => {
        const response = await axios.get("https://fakestoreapi.com/products");
        productDispatch({ type: "GET_PRODUCTS", payload: response.data });
        // console.log("working");
      };
      getProducts();
    } catch (error) {
      console.log(error);
    }
  }, [productDispatch]);

  const handleProduct = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => {
        return (
          <article
            key={product.id}
            className="bg-white rounded-lg flex justify-center align-middle flex-col overflow-hidden shadow-md hover:shadow-lg"
            onClick={() => handleProduct(product.id)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-[50%] block mx-auto object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-700 mb-2">{product.description}</p>
              <p className="text-green-600 font-semibold">{product.price}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default ProductList;
