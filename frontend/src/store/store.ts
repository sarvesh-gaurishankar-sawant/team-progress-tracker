import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./task/taskSlice";
import activeTaskReducer from './active/activeTaskSlice';
import activeColumnReducer from './active/activeColumnSlice';
import activeBoardReducer from './active/activeBoardSlice';
import sideBarFlagReducer from './flags/sideBarFlagSlice';
import notificationReducer from './notification/notificationSlice';
import singleTaskReducer from './task/singleTaskSlice';
import singleBoardReducer from './board/singleBoardSlice';

export const store = configureStore({
  reducer: {
    tasksObjectArray: taskReducer,
    activeTask:activeTaskReducer,
    activeColumn:activeColumnReducer,
    activeBoard:activeBoardReducer,
    sideBarFlag:sideBarFlagReducer,
    notification:notificationReducer,
    singleTask:singleTaskReducer,
    singleBoard:singleBoardReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;