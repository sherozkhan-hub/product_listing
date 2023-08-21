const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      console.log("red", action.payload);
      return { ...state, productList: action.payload };
    case "PRODUCT":
      return { ...state, singleProduct: action.payload };
    default:
      return state;
  }
};

export default productReducer;
