import "./App.css";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Navigate, Route, Routes } from "react-router-dom";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import { ProfileContainer } from "./components/Profile/ProfileContainer";

// interface AppPropsType {
//   // state: StateType;
//   //  dispatch: (action: any) => void;
//   store: AppPropsType;
// }
function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Routes>
          <Route path="/" element={<Navigate to="/profile" />} />
          <Route path="/profile" element={<ProfileContainer />} />
          <Route path="/dialogs" element={<DialogsContainer />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
