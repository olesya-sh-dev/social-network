import { Dispatch } from "redux";
import { getAuthUserDataThunkCreator } from "./auth-reducer";
import { ThunkAction } from "redux-thunk";
import { AppStateType } from "./redux-store";

let initialState = {
    initialized: false
};
export const appReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            };
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: "INITIALIZED_SUCCESS"})

type ActionType = ReturnType<typeof initializedSuccess>

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserDataThunkCreator());
    promise.then(() => {
        dispatch(initializedSuccess());
    });
    }