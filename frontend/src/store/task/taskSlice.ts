import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Board, TaskType } from "../../components/type";
import { arrayMove } from "@dnd-kit/sortable";

//Interface for typescript
interface TaskState {
  value: TaskType[];
}

interface UpdateTaskState {
    tasksObjectArray:TaskType[]; 
    boardData:Board;
}

//Create the initial slice
const initialState: TaskState = {
  value: [],
};

//Create the slice
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    //Swap index of two task
    swapTwoTasksIndex: (state, action) => {
        const activeIndex = state.value.findIndex((task) => task._id === action.payload.activeId);
        const overIndex = state.value.findIndex((task) => task._id === action.payload.overId);

        if (state.value[activeIndex].status !== state.value[overIndex].status) {
            state.value[activeIndex].status = state.value[overIndex].status;
            state.value =  arrayMove(state.value, activeIndex, overIndex - 1);
        }

        state.value = arrayMove(state.value, activeIndex, overIndex);
    },
    //Change the column id of the task
    addTaskToColumn: (state, action) => {
        const activeIndex = state.value.findIndex((task) => task._id === action.payload.activeId);
        state.value[activeIndex].status = action.payload.boardData.columns[Number(action.payload.overId)];
        state.value = arrayMove(state.value, activeIndex, activeIndex) ;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        getTaskFromBoardAsync.fulfilled,
        (state, action: PayloadAction<TaskType[]>) => {
            state.value = action.payload;
        }
      )
      .addCase(
        updateTaskFromBoardAsync.fulfilled,
        (state) => {}
      );
  }
});

//Get task and create an array of objects of tasks
export const getTaskFromBoardAsync = createAsyncThunk<TaskType[], Board>(
    "task/getTaskFromBoardAsync",
    async (boardData: Board) => {
        const tasksMongoIds = boardData.tasks;

        const tasksObjectPromiseArray = Promise.all(
            tasksMongoIds.map(tasksMongoId =>
              fetch(`http://localhost:3001/tasks/${tasksMongoId}`)
                .then(response => response.json())
            )
          );

        const taskObjectArray: TaskType[] = await tasksObjectPromiseArray;
  
        const filteredTaskObjectArray: TaskType[] = taskObjectArray.filter(task => task !== null);
        return filteredTaskObjectArray;
    }
);

//Update task in database
export const updateTaskFromBoardAsync = createAsyncThunk(
    "task/updateTaskFromBoardAsync",
    async (boardDataAndTasks: UpdateTaskState) => {
          Promise.all(
            boardDataAndTasks.tasksObjectArray.map(task =>
              fetch(`http://localhost:3001/tasks/${task._id}`, {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(task),
              })
                .then(response => response.json())
        )
        )
    }
);

export const { swapTwoTasksIndex, addTaskToColumn } = taskSlice.actions;

export default taskSlice.reducer;