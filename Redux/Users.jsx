import { createSlice } from "@reduxjs/toolkit";

function initialState() {
  let ob = { islogin: false, name: undefined, token: undefined };
  let data = localStorage.getItem("userdata");

  if (data != null) {
    data = JSON.parse(data);
    ob = data.value;
  }
  return ob;
}

const Slice = createSlice({
  name: "User",
  initialState: {
    value: initialState(),
  },
  reducers: {
    changeInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});
export default Slice.reducer;
export const { changeInfo } = Slice.actions;
