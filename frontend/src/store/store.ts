import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import activeTaskReducer from './active/activeTaskSlice';
import activeColumnReducer from './active/activeColumnSlice';
import activeBoardReducer from './active/activeBoardSlice';

export const store = configureStore({
  reducer: {
    tasksObjectArray: taskReducer,
    activeTask:activeTaskReducer,
    activeColumn:activeColumnReducer,
    activeBoard:activeBoardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;