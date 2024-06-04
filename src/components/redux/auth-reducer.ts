import { isJSDocAuthorTag } from "typescript";

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
