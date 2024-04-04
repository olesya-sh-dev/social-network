import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

let postData = [
  { id: 1, message: "Hi, how are you", likesCount: 15 },
  { id: 2, message: "It's my first post", likesCount: 20 },
];
let dialogs = [
  { id: "1", name: "Dimych" },
  { id: "2", name: "Andrey" },
  { id: "3", name: "Sveta" },
  { id: "4", name: "Sasha" },
  { id: "5", name: "Viсtor" },
  { id: "6", name: "Valera" },
];

let messages = [
  { id: "1", message: "Hi" },
  { id: "2", message: "How is your React?" },
  { id: "3", message: "Yo" },
  { id: "4", message: "Yo" },
  { id: "5", message: "Yo" },
];
ReactDOM.render(
  <BrowserRouter>
    <App postData={postData} dialogs={dialogs} messages={messages} />
  </BrowserRouter>,
  document.getElementById("root")
);
