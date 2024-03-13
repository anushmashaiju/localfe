import axios from "axios";
import { BASE_URL } from "./constants/constants";
export const loginCall = async (userCredentials, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
      //  const res = await axios.post("auth/login", userCredentials)
      const res = await axios.post(`${BASE_URL}/api/auth/login`, userCredentials); 
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};


