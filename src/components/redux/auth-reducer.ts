import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { authAPI } from "../../api/api";
import { AnyAction, Dispatch } from "redux";
import { AppStateType } from "./redux-store";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
};
type AuthPropsType = typeof initialState;
export const authReducer = (
  state: AuthPropsType = initialState,
  action: AuthActionsType
) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
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
  isAuth: boolean
) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const getAuthUserDataThunkCreator =
  () => async (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
  };

export const loginThunkCreator =
  (email: string, password: string, rememberMe = false) =>
  async(dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    let response = await authAPI.login(email, password, rememberMe)
    
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
      } else {
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    }
  
export const logoutThunkCreator =
  () => async(dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    }

