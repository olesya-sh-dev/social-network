import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppStateType } from "./components/redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React from "react";
import { connect } from "react-redux";

import { initializeApp } from "./components/redux/app-reducer";
import { Preloader } from "./components/common/Preloader";

type AppProps = { 
  state: AppStateType
  initializeApp: () => void,
  initialized: boolean
  //getAuthUserDataThunkCreator: any

}
class App extends React.Component <AppProps > {
  componentDidMount() {
    this.props.initializeApp();
}
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          {/* <Route path="/profile" element={<Person/>} /> */}
          <Route path="/profile/:userId?" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}
}
const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized
});

export default connect (mapStateToProps, { initializeApp })(App);
