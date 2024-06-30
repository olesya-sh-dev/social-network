
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { authAPI, securityAPI } from "../../api/api";
import { AnyAction, Dispatch } from "redux";
import { AppStateType } from "./redux-store";
import { stopSubmit } from "redux-form";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL = "samurai-network/auth/GET_CAPTCHA_URL";

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
  
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
    case GET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export type AuthActionsType = ReturnType<typeof setAuthUserDataAC>| ReturnType<typeof getCaptchaUrlSuccessAC>
export const setAuthUserDataAC = (
  userId: number | null,
  email: string | null,
  login: string | null,
  isAuth: boolean
) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } });

export const getCaptchaUrlSuccessAC = (captchaUrl: string) =>
  ({ type: GET_CAPTCHA_URL, payload: { captchaUrl } } as const);

export const getAuthUserDataThunkCreator =
  () => async (dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    let response = await authAPI.me();
    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setAuthUserDataAC(id, email, login, true));
    }
  };

export const loginThunkCreator =
  (email: string, password: string, rememberMe = false, captcha: string) =>
  async(dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    let response = await authAPI.login(email, password, rememberMe, captcha)
    
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserDataThunkCreator());
      } else {
        if (response.data.resultCode === 10) {
          dispatch(getCaptchaUrl())
        }
        let message =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Some error";
        dispatch(stopSubmit("login", { _error: message }));
      }
    }
  export const getCaptchaUrl = () => async(dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
    const response = await securityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url
    dispatch(getCaptchaUrlSuccessAC(captchaUrl))    
  }

export const logoutThunkCreator =
  () => async(dispatch: ThunkDispatch<AppStateType, unknown, AnyAction>) => {
   let response = await authAPI.logout()
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserDataAC(null, null, null, false));
      }
    }

