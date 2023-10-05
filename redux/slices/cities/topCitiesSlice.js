import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import apiCall from "../../../utils/apiCall";

export const fetchTopCities = createAsyncThunk("fetchTopCities", async () => {
    try {
        const response = await apiCall("get_cities.php", "get");
        return response.data;
    } catch (error) {
        console.log("error", error.message);
        return error;
    }

})

const topCitiesSlice = createSlice({
    name: "topCities",
    initialState: {
        isLoading: false,
        data: null,
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(fetchTopCities.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchTopCities.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        })
        builder.addCase(fetchTopCities.rejected, (state) => {
            state.isError = false;
        })
    }
})

export default topCitiesSlice.reducer;