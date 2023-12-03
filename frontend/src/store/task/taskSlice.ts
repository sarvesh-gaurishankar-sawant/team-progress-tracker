import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Board, TaskType } from "../../components/type";

//Interface for typescript
interface TaskState {
  value: TaskType[];
}

//Create the initial slice
const initialState: TaskState = {
  value: [],
};

//Create the slice
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getTaskFromBoardAsync.fulfilled,
        (state, action: PayloadAction<TaskType[]>) => {
            state.value = action.payload;
        }
      );
  }
});

export const getTaskFromBoardAsync = createAsyncThunk(
    "counter/getTaskFromBoardAsync",
    async (boardData: Board) => {
        const tasksMongoIds = boardData.tasks;

        const tasksObjectPromiseArray = Promise.all(
            tasksMongoIds.map(tasksMongoId =>
              fetch(`http://localhost:3001/tasks/${tasksMongoId}`)
                .then(response => response.json())
            )
          );

        const taskObjectArray: TaskType[] = await tasksObjectPromiseArray;
  
        const filteredTaskObjectArray = taskObjectArray.filter(task => task !== null);
        return filteredTaskObjectArray;
    }
);

export default taskSlice.reducer;