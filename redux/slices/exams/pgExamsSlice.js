import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchPGExams = createAsyncThunk("fetchPGExams", async () => {
    try {
        const response = await apiCall("get_exam_categories.php?type=2&no_pagination", "get")
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const pgExamsSlice = createSlice({
    name: "pgExams",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPGExams.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchPGExams.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchPGExams.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default pgExamsSlice.reducer;