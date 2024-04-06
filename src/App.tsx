import React from "react";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Navigate, Route, Routes } from "react-router-dom";

function App({ state, addPost }: any) {
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
              <Profile postData={state.profilePage.posts} addPost={addPost} />
            }
          />
          <Route
            path="/dialogs"
            element={
              <Dialogs
                dialogs={state.dialogsPage.dialogs}
                messages={state.dialogsPage.messages}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
