import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchTopColleges = createAsyncThunk("fetchTopColleges", async () => {
    try {
        const response = await apiCall("get_college_category.php?type=1", "get")
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const topCollegesSlice = createSlice({
    name: "topColleges",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopColleges.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTopColleges.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTopColleges.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default topCollegesSlice.reducer;