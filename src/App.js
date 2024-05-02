import "./App.css";

import { Routes, Route } from "react-router-dom";

import { createContext, useState } from "react";

import EntryPage from "./components/AppIntro";
import UserInfoForm from "./components/UserInfo";
import AddNewTask from "./components/AddNewTask";
import Home from "./components/Home";
import ScheduleSection from "./components/Schedule";
import Profile from "./components/Profile";

const date = new Date();

const TaskList = [
  {
    id: 1,
    projectname: "Grocery shopping app design",
    description: "Market Research",
    time: "10:00 AM",
    group: "office project",
    status: "Done",
    date: `${new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1
    )}`,
  },
  {
    id: 2,
    projectname: "Grocery shopping app design",
    description: "Competitive Analysis",
    time: "12:00 PM",
    group: "office project",
    status: "Progress",
    date: `${new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() - 1
    )}`,
  },
  {
    id: 3,
    projectname: "Uber Eats redesign challenge",
    description: "Create Low-fidelity Wireframe",
    time: "7:00 PM",
    group: "personal project",
    status: "To do",
    date: `${new Date(date.getFullYear(), date.getMonth(), date.getDate())}`,
  },
  {
    id: 4,
    projectname: "About design sprint",
    description: "How to pitch a Design Sprint",
    time: "09:00 PM",
    group: "study",
    status: "To do",
    date: `${new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1
    )}`,
  },
];

export const projectListContext = createContext();

function App() {
  const [taskList, setTaskList] = useState(TaskList);

  const updateProjectsList = (newTask) => {
    setTaskList([...taskList, newTask]);
  };
  return (
    <div>
      <projectListContext.Provider
        value={{ taskList: taskList, updateList: updateProjectsList }}
      >
        <Routes>
          <Route exact path="/" element={<EntryPage />} />
          <Route exact path="/user-info" element={<UserInfoForm />} />
          <Route path="/home" element={<Home />} />
          <Route path="/schedule" element={<ScheduleSection />} />
          <Route exact path="/add-new" element={<AddNewTask />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </projectListContext.Provider>
    </div>
  );
}

export default App;
