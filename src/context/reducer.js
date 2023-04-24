export const actionType = {
  SET_USER: "SET_USER",
  SET_FOOD_ITEMS : 'SET_FOOD_ITEMS'
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionType.SET_USER:
      return {
        ...state,
        user: action.user,
      };
      case actionType.SET_FOOD_ITEMS:
        return {
          ...state,
          foodItems: action.foodItems,
        };

    default:
      return state;
  }
};
export default reducer;

// Code trên định nghĩa một reducer function, được sử dụng để xử lý các action được gửi đến từ các thành phần của ứng dụng.

// Reducer này sử dụng một hằng số actionType để định nghĩa các action có thể được xử lý bởi reducer này. Hiện tại, reducer chỉ xử lý một action có tên là "SET_USER", nó sẽ trả về một đối tượng mới với giá trị của user được đặt bằng giá trị của thuộc tính "user" được cung cấp trong action.

// Nếu reducer nhận được một action không được xác định trong hằng số actionType, nó sẽ trả về giá trị trạng thái hiện tại mà không làm thay đổi bất kỳ điều gì.

// Reducer này có thể được sử dụng trong Context API của React để quản lý trạng thái toàn cục của ứng dụng và cập nhật các giá trị của thuộc tính "user" của trạng thái.