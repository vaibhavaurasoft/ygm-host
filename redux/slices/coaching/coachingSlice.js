import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchCoaching = createAsyncThunk("fetchCoaching", async () => {
    try {
        const response = await apiCall("get_courses.php?type=3", "get");
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }

})

const coachingSlice = createSlice({
    name: "Coaching",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCoaching.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchCoaching.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchCoaching.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default coachingSlice.reducer;