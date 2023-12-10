import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Board } from "../../components/type";


//Interface for typescript
interface BoardState {
  value: Board | null;
}

//Create the initial slice
const initialState: BoardState = {
  value: null,
};

//Create the slice
const activeBoardSlice = createSlice({
  name: "activeboard",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getBoardAsync.fulfilled,
        (state, action: PayloadAction<Board>) => {
            state.value = action.payload;
        }
      )
  }
});

//Get Board based on board id
export const getBoardAsync = createAsyncThunk<Board, string>(
    "task/getBoardAsync",
    async (boardId: string) => {
        const board: Board = await fetch(`http://localhost:3001/boards/${boardId}`).then(response => response.json())
        return board;
    }
);

export default activeBoardSlice.reducer;