/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const Carts = ({ cart, cartDispatch }) => {
  const navigate = useNavigate();

  const handleDecrement = (item) => {
    cartDispatch({ type: "decrement", payload: item });
  };

  const handleBackPage = () => {
    navigate("/products");
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-md rounded-lg">
        <button
          onClick={handleBackPage}
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-2 rounded-md mb-4"
        >
          Go to Products
        </button>
        {cart.cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b border-gray-300 pb-4 mb-4"
          >
            <div className="flex items-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="ml-4">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <p className="text-gray-600">${item.price}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => handleDecrement(item)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded-l"
              >
                -
              </button>
              <p className="text-lg font-semibold px-3">{item.quantity}</p>
              <button
                onClick={() => {
                  cartDispatch({ type: "addToCart", payload: item });
                }}
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-3 py-1 rounded-r"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carts;
