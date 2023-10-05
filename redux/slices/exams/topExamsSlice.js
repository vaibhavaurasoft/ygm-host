import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchTopExams = createAsyncThunk("fetchTopExams", async () => {
    try {
        const response = await apiCall("get_exam_categories.php", "get")
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const topExamsSlice = createSlice({
    name: "topExams",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopExams.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTopExams.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTopExams.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default topExamsSlice.reducer;