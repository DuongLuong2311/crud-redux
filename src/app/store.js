import { configureStore } from '@reduxjs/toolkit';
// import classroomSlice from '../features/slices/classroomSlice';
// import studentSlice from '../features/slices/studentSlice';
import userSlice from '../features/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    // classroom: classroomSlice.reducer,
    // student: studentSlice.reducer
  },
});
