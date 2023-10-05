import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchTopCoaching = createAsyncThunk("fetchTopCoaching", async () => {
    try {
        const response = await apiCall("get_college_category.php?type=2&no_pagination", "get");
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }

})

const topCoachingSlice = createSlice({
    name: "topCoaching",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopCoaching.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTopCoaching.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTopCoaching.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default topCoachingSlice.reducer;