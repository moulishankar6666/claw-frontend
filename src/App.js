import "./App.css";

import { Routes, Route, json } from "react-router-dom";

import { createContext, useEffect, useState } from "react";

import EntryPage from "./components/AppIntro";
import SigninForm from "./components/SigninRoute";
import LoginForm from "./components/LoginRoute";
import AddNewTask from "./components/AddNewTask";
import Home from "./components/Home";
import ScheduleSection from "./components/Schedule";
import Profile from "./components/Profile";

//packages
import Cookies from "js-cookie";

export const projectListContext = createContext();

function App() {
  const getUser = Cookies.get("user");
  const [userInfo, setUserInfo] = useState(getUser ? JSON.parse(getUser) : {});
  const [taskList, setTaskList] = useState([]);

  const updateProjectsList = (value) => {
    setTaskList(value);
  };

  const updateUserInfo = (value) => {
    setUserInfo(value);
  };

  return (
    <div>
      <projectListContext.Provider
        value={{
          taskList: taskList,
          updateList: updateProjectsList,
          userInfo: userInfo,
          UserInformation: updateUserInfo,
        }}
      >
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
          <Route exact path="/signin" element={<SigninForm />} />
          <Route exact path="/login" element={<LoginForm />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/schedule" element={<ScheduleSection />} />
          <Route exact path="/add-new" element={<AddNewTask />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </projectListContext.Provider>
    </div>
  );
}

export default App;
