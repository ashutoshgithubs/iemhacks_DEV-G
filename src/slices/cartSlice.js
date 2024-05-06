import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  totalItems: localStorage.getItem("totalItems")
    ? JSON.parse(localStorage.getItem("totalItems"))
    : 0,
  cart: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalPrice: localStorage.getItem("totalPrice")
    ? JSON.parse(localStorage.getItem("totalPrice"))
    : 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const course = action.payload;
      const index = state.cart.findIndex((index) => index._id === course._id);
      if (index >= 0) {
        //Course is already in the cart, don't modify the quantity
        toast.error("Course is already in the cart");
        return;
      }
      //If course isn't in the cart, then add it to the cart
      state.cart.push(course);
      state.totalItems++;
      state.totalPrice += course.price;
      //Update the local storage
      localStorage.setItem("cart", JSON.stringify(state.cart));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      //Let's show toast
      toast.success("Courses added to cart");
    },
    removeFromCart: (state, action) => {
      const courseId = action.payload;
      const index = state.cart.findIndex((item) => item._id === courseId);

      if (index >= 0) {
        // If the course is found in the cart, remove it
        state.totalItems--;
        state.totalPrice -= state.cart[index].price;
        state.cart.splice(index, 1);
        // Update to localstorage
        localStorage.setItem("cart", JSON.stringify(state.cart));
        localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
        localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
        // show toast
        toast.success("Course removed from cart");
      }
    },
    resetCart: (state) => {
      state.cart = [];
      state.totalPrice = 0;
      state.totalItems = 0;
      //Update localStorage
      localStorage.removeItem("cart");
      localStorage.removeItem("totalItems");
      localStorage.removeItem("totalPrice");
    },
  },
});
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
