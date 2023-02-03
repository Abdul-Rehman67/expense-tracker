import { CREATE_TRANSACTION, DELETE_TRANSACTION, UPDATE_TRANSACTION } from "../../apis/apiRoutes";
import {
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_FAILURE,
  CREATE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_FAILURE,
  DELETE_TRANSACTION_REQUEST,
  DELETE_TRANSACTION_SUCCESS,
  UPDATE_TRANSACTION_REQUEST,
  UPDATE_TRANSACTION_SUCCESS,
} from "../constants/transaction";
export const createTransaction = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: CREATE_TRANSACTION_REQUEST,
    });

    const data = await axios.post(CREATE_TRANSACTION, payload);
    console.log(data);

    dispatch({
      type: CREATE_TRANSACTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_TRANSACTION_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const updateTransaction = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: UPDATE_TRANSACTION_REQUEST
    });

    const data = await axios.post(UPDATE_TRANSACTION, payload);
    console.log(data);

    dispatch({
      type: UPDATE_TRANSACTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: UPDATE_TRANSACTION_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const deleteTransaction = (payload) => async (dispatch) => {
  try {
    dispatch({
      type: DELETE_TRANSACTION_REQUEST,
    });

    const data = await axios.post(DELETE_TRANSACTION, payload);
    console.log(data);

    dispatch({
      type: DELETE_TRANSACTION_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_TRANSACTION_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
