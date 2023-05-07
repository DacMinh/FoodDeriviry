import { fetchCart, fetchUser } from "../ultis/fetchLocalStorageData";

const cartData = fetchCart();
const userInfo = fetchUser();

export const initialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartData,
};
