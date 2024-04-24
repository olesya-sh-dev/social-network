import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./components/redux/state";

let rerenderEntireTree = () => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        // updateNewPostText={store.upDateNewPostText.bind(store)}
        //  upDateNewMessageText={store.upDateNewMessageText.bind(store)}
       
        // addNewMessage={store.addNewMessage.bind(store)}
      />
    </BrowserRouter>,
    document.getElementById("root")
  );
};

rerenderEntireTree();
store.subscribe(rerenderEntireTree);
//  store.subscribe(()=> {
//   let state = store.getState();
//   rerenderEntireTree();
//  })
