import { PayloadAction, createSlice } from "@reduxjs/toolkit";

//Create the initial slice
const initialState = {
  value: '',
};

//Create the slice
const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    //Set the side bar flag
    setNotification: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
});

export const { setNotification } = notificationSlice.actions;

export default notificationSlice.reducer;