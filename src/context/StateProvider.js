import React, {createContext,useContext,useReducer} from "react";
export const StateContext = createContext();
export const StateProvider = ({reducer,initialState,children}) =>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)
export const useStateValue = () => useContext (StateContext)
// Code trên định nghĩa một React Context (createContext) để lưu trữ trạng thái toàn cục của ứng dụng và cung cấp cho các thành phần con truy cập vào trạng thái này. Nó sử dụng hook useReducer để quản lý trạng thái toàn cục của ứng dụng.

// Nó cung cấp một StateProvider component, cho phép bao bọc tất cả các thành phần con bên trong một StateContext.Provider, với giá trị của useReducer được cung cấp làm giá trị cho Provider.

// Cuối cùng, nó cung cấp một hook useStateValue, cho phép các thành phần con truy cập vào giá trị trạng thái được lưu trữ trong Context thông qua useContext.