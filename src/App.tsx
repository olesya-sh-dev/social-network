import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Navigate, Route, Routes } from "react-router-dom";
import { StateType } from "./components/redux/state";

interface AppPropsType {
  state: StateType;
  // addPost: () => void;
  // updateNewPostText: (text: string) => void;
  dispatch: (action: any) => void;
  addNewMessage: () => void;
  upDateNewMessageText: (text: string) => void;
}
function App({
  state,
  dispatch,
  addNewMessage,
  upDateNewMessageText,
}: AppPropsType) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar friends={state.sidebar.friends} />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route
            path="/profile"
            element={
              <Profile
                postData={state.profilePage.posts}
                dispatch={dispatch}
                newPostText={state.profilePage.newPostText}
              />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
                addNewMessage={addNewMessage}
                upDateNewMessageText={upDateNewMessageText}
                newMessageBody={state.dialogsPage.newMessageBody}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
