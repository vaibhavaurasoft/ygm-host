import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchUGExams = createAsyncThunk("fetchUGExams", async () => {
    try {
        const response = await apiCall("get_exam_categories.php?type=1&no_pagination", "get")
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const ugExamsSlice = createSlice({
    name: "ugExams",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUGExams.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchUGExams.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchUGExams.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default ugExamsSlice.reducer;