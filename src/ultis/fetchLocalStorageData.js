export const fetchUser = () => {
  const userInfo =
    localStorage.getItem("user") !== null
      ? JSON.parse(localStorage.getItem("user"))
      : (localStorage.removeItem("user"), null);
  return userInfo;
};

export const fetchCart = () => {
  const cartInfo =
    localStorage.getItem("cartItems") !== null
      ? JSON.parse(localStorage.getItem("cartItems"))
      : null;
  return cartInfo ? cartInfo : [];
};
