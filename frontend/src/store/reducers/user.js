import { GET_USER_DATA_REQUEST,GET_USER_DATA_FAILURE,GET_USER_DATA_SUCCESS } from "../constants/user";
export const getUserDataReducer = (state = {}, action) => {
    switch (action.type) {
      case GET_USER_DATA_REQUEST:
        return { loading: true };
      case GET_USER_DATA_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case GET_USER_DATA_FAILURE:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };