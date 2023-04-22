import {fetchUser}from '../ultis/fetchLocalStorageData'
const userInfo = fetchUser ();


export const initialState ={
    user: userInfo,
}