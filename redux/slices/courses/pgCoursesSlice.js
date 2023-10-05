import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchPGCourses = createAsyncThunk("fetchPGCourses", async () => {
    try {
        const response = await apiCall("get_courses.php?type=2", "get");
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const pgCoursesSlice = createSlice({
    name: "pgCourses",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPGCourses.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPGCourses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchPGCourses.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default pgCoursesSlice.reducer;