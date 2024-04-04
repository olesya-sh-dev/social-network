import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Route, Routes } from "react-router-dom";
import { PropsType } from "./components/Profile/My posts/Post/Post";
import { MessagePropsType } from "./components/Dialogs/Message";
import { DialogItemPropsType } from "./components/Dialogs/DialogItem";

type AppPropsType = {
  postData: PropsType[];
  dialogs: DialogItemPropsType[];
  messages: MessagePropsType[];
};

function App({ postData, dialogs, messages }: AppPropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/profile" element={<Profile postData={postData} />} />
          <Route
            path="/dialogs"
            element={<Dialogs dialogs={dialogs} messages={messages} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
