import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { Profile } from "./components/Profile/Profile";
import { AppStateType } from "./components/redux/redux-store";
import UsersContainer from "./components/Users/UsersContainer";
//import { store } from "./components/redux/redux-store";

// interface AppPropsType {
//   // state: StateType;
//   //  dispatch: (action: any) => void;
//   store: AppPropsType;
// }
function App({ state }: { state: AppStateType }) {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route
            path="/profile"
            element={<Profile posts={state.profilePage.posts} />}
          />
          <Route path="/dialogs" element={<DialogsContainer />} />
          <Route path="/users" element={<UsersContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
