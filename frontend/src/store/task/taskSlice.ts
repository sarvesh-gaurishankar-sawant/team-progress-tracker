import { createSlice } from "@reduxjs/toolkit";
import { TaskType } from "../../components/type";

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
});

export default taskSlice.reducer;