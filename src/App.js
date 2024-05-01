import "./App.css";

import { Routes, Route } from "react-router-dom";

import EntryPage from "./components/AppIntro";
import UserInfoForm from "./components/UserInfo";
import AddNewTask from "./components/AddNewTask";
import Home from "./components/Home";
import ScheduleSection from "./components/Schedule";
import Profile from "./components/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<EntryPage />} />
        <Route exact path="/user-info" element={<UserInfoForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="/schedule" element={<ScheduleSection />} />
        <Route exact path="/add-new" element={<AddNewTask />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
