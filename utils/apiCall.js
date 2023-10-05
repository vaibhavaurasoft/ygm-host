import axios from "axios";
import { toLower } from "lodash";

const apiCall = async (path, method, data) => {





    try {
        if (toLower(method) === "get" && path) {
            const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/${path}`)
            if (response) {
                return response
            }
        }
        else if (path && toLower(method) === "post" && data) {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/${path}`, data)
            if (response) {
                return response
            }
        }
        else {
            console.log("Somthing went wrong please pass valid data");
        }
    } catch (error) {
        console.log(error.message)
        return error
    }

}

export default apiCall