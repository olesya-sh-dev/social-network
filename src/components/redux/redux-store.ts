import { AnyAction, applyMiddleware, combineReducers, compose, createStore } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import {authReducer} from "./auth-reducer";
import thunk, { ThunkDispatch } from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import { appReducer } from "./app-reducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";


let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

//export let store = createStore(rootReducer, applyMiddleware(thunk))
//@ts-ignore
window._store_ = store

export type AppStateType = ReturnType<typeof rootReducer>



export type AppThunkDispatch = ThunkDispatch<AppStateType, any, AnyAction>;
export const useAppDispatch = () => useDispatch<AppThunkDispatch>();
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector
