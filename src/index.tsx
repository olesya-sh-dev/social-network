import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/redux/redux-store";
import { Provider } from "react-redux";

let rerenderEntireTree = (state: any) => {

  ReactDOM.render(
    <BrowserRouter>
    <Provider store={store}>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
      </Provider>
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree(store.getState());
//store.subscribe(rerenderEntireTree);
 store.subscribe(()=> {
  let state = store.getState();
  rerenderEntireTree(state);
 })
