import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppStateType, store } from "./components/redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";

//import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
//import DialogsContainer from "./components/Dialogs/DialogsContainer";
import React, { lazy } from "react";
import { Provider, connect } from "react-redux";
import { initializeApp } from "./components/redux/app-reducer";
import { Preloader } from "./components/common/Preloader";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(()=>import('./components/Profile/ProfileContainer'))
const SuspendedProfileContainer = withSuspense(ProfileContainer);
const SuspendedDialogsContainer = withSuspense(DialogsContainer);
type AppProps = {
  //state: AppStateType
  initializeApp: () => void;
  initialized: boolean;
  //getAuthUserDataThunkCreator: any
};
class App extends React.Component<AppProps> {
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
            <Route path="/profile/:userId?" element={<SuspendedProfileContainer/>}/>
            <Route path="/dialogs" element={<SuspendedDialogsContainer/>} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state: AppStateType) => ({
  initialized: state.app.initialized,
});

const AppContainer = connect(mapStateToProps, { initializeApp })(App);

const SamuraiJSApp = (props: any) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default SamuraiJSApp;
