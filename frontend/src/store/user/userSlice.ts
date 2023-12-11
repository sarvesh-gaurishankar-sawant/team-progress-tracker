import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//Create the initial slice
const initialState = {
  value: "",
};

//Create the slice
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //Set the side bar flag
    setUserSlice: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
    deleteUserSlice:(state) => {
      state.value = ""
    }
  },
});

export const { setUserSlice } = userSlice.actions;

export default userSlice.reducer;