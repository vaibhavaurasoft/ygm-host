import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchUGCourses = createAsyncThunk("fetchUGCourses", async () => {
    try {
        const response = await apiCall("get_courses.php?type=1", "get");
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const ugCoursesSlice = createSlice({
    name: "ugCourses",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUGCourses.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUGCourses.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUGCourses.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default ugCoursesSlice.reducer;