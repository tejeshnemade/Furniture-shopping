import { configureStore } from "@reduxjs/toolkit";
import Users from "./Users";
import cardSlice from "./cardSlice";

const Store = configureStore({
  reducer: {
    loginUser: Users,
    cardItem: cardSlice,
  },
});
Store.subscribe(()=>{
  let str = JSON.stringify(Store.getState().loginUser)
  localStorage.setItem('userdata',str)
})

export default Store;
