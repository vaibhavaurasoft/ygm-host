import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../utils/apiCall";

export const fetchHistory = createAsyncThunk("fetchHistory", async (token) => {
    try {
        const response = await apiCall(`student_history.php?token=${token}`, "get")
        return response.data.history;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }
})

const historySlice = createSlice({
    name: "history",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHistory.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchHistory.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchHistory.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default historySlice.reducer;