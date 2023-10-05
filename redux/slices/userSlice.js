import { createSlice } from "@reduxjs/toolkit";
import { getItem } from "../../utils/utilsFunctions";

console.log("======",getItem("GYC_login_user_data"));
const userSlice = createSlice({
    name: "user",
    initialState: {
        userDetails: JSON.parse(getItem("GYC_login_user_data")) || null
    },
    reducers: {
        setUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
        removeUserDetails: (state, action) => {
            state.userDetails = action.payload;
        },
    }
})
export const { setUserDetails, removeUserDetails } = userSlice.actions

export default userSlice.reducer;