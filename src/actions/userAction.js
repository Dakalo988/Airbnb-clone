import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from "../types/userTypes";
import axios from "axios";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/login",
      { email, password }, // Corrected typo: "Password" -> "password"
      config
    );

    localStorage.setItem("userInfo", JSON.stringify(data)); // Corrected typo: "straingfy" -> "stringify"
    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message // Corrected typo: "date" -> "data"
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  // Corrected assignment syntax
  localStorage.removeItem("userInfo"); // Remove user info from localStorage
  dispatch({ type: USER_LOGOUT }); // Dispatch USER_LOGOUT action
};
