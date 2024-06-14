import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";

import { AppStateType } from "./components/redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { LoginPage } from "./components/Login/Login";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Person } from "./components/Profile/Person/Person";

function App({ state }: { state: AppStateType }) {
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
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
