import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ColumnType } from "../../components/type";


//Interface for typescript
interface ColumnState {
  value: ColumnType | null;
}

//Create the initial slice
const initialState: ColumnState = {
  value: null,
};

//Create the slice
const activeColumnSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setActiveColumn: (state, action: PayloadAction<ColumnState>) => {
        state = action.payload
    }
  },
});

export const { setActiveColumn } = activeColumnSlice.actions;

export default activeColumnSlice.reducer;