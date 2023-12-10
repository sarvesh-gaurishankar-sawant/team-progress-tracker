import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import activeTaskReducer from './active/activeTaskSlice';
import activeColumnReducer from './active/activeColumnSlice';
import activeBoardReducer from './active/activeBoardSlice';
import sideBarFlagReducer from './flags/sideBarFlagSlice';

export const store = configureStore({
  reducer: {
    tasksObjectArray: taskReducer,
    activeTask:activeTaskReducer,
    activeColumn:activeColumnReducer,
    activeBoard:activeBoardReducer,
    sideBarFlag:sideBarFlagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;