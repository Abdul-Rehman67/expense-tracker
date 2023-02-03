import { GET_USER_DATA } from "../../apis/apiRoutes";
import {
  GET_USER_DATA_FAILURE,
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
} from "../constants/user";
import axios from "../../apis/axios";

export const getUserData = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_DATA_REQUEST,
    });

    const data = await axios.get(GET_USER_DATA);
    console.log(data);

    dispatch({
      type: GET_USER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_DATA_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
