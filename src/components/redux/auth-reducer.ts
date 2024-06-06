
import { ThunkAction } from "redux-thunk";
import { authAPI } from "../../api/api";
import { Dispatch } from "redux";
import { AppStateType } from "./redux-store";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false
  
};
type AuthPropsType = typeof initialState;
export const authReducer = (state: AuthPropsType = initialState, action: AuthActionsType) => {
  switch (action.type) {
    case "SET_USER_DATA":

      return {
        ...state,
        ...action.payload,
        isAuth: true
      };
    default:
      return state;
  }
};

export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>;
export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | null,
 
) => ({ type: "SET_USER_DATA", payload: { userId, email, login} });


export const getAuthUserDataThunkCreator = () => (dispatch: Dispatch) => {
  return authAPI.me()
  .then((response) => {
    console.log(response.data);
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data
        dispatch(setAuthUserDataAC(id, email, login))
    }
  }
  );
}


