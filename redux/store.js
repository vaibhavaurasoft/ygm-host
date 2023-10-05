import { configureStore } from "@reduxjs/toolkit";
import ugCoursesReducer from './slices/courses/ugCoursesSlice';
import pgCoursesReducer from './slices/courses/pgCoursesSlice';
import coachingReducer from './slices/coaching/coachingSlice';
import topCoachingReducer from './slices/coaching/topCoachingSlice';
import topCitiesReducer from './slices/cities/topCitiesSlice';
import ugExamsReducer from "./slices/exams/ugExamsSlice";
import pgExamsReducer from "./slices/exams/pgExamsSlice";
import topExamsReducer from "./slices/exams/topExamsSlice";
import topCollegesReducer from "./slices/colleges/topCollegesSlice";
import historyReducer from "./slices/historySlice";
import userReducer from "./slices/userSlice";
export const store = configureStore({
    reducer:{
        ugCourses: ugCoursesReducer,
        pgCourses: pgCoursesReducer,
        Coaching: coachingReducer,
        ugExams: ugExamsReducer,
        pgExams: pgExamsReducer,
        topExams: topExamsReducer,
        topColleges: topCollegesReducer,
        history: historyReducer,
        topCoaching:topCoachingReducer,
        topCities:topCitiesReducer,
        user: userReducer,
    }
})