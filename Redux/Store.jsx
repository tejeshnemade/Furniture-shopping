import { configureStore } from "@reduxjs/toolkit";
import Users from "./Users";

const Store = configureStore({
  reducer: {
    loginUser: Users,
  },
});
Store.subscribe(()=>{
  let str = JSON.stringify(Store.getState().loginUser)
  localStorage.setItem('userdata',str)
})

export default Store;
