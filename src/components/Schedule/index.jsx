import {
  ScheduleSectionContainer,
  DisplayDates,
  FilterTasks,
  TasksListContainer,
} from "./StyledComponent";

// icons
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { FaClock } from "react-icons/fa";
import { GiDiscGolfBag } from "react-icons/gi";
import { MdPersonPin } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";

// Hooks
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

// Component
import NavBar from "../NavBar";
import { projectListContext } from "../.././App";

let date = new Date();
const Dates = [
  {
    id: 1,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 6),
  },
  {
    id: 2,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 5),
  },
  {
    id: 3,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 4),
  },
  {
    id: 4,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 3),
  },

  {
    id: 5,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 2),
  },
  {
    id: 6,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() - 1),
  },
  {
    id: 7,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate()),
  },
  {
    id: 8,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1),
  },
  {
    id: 9,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 2),
  },
  {
    id: 10,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 3),
  },
  {
    id: 11,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 4),
  },
  {
    id: 12,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 5),
  },
  {
    id: 13,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 6),
  },
  {
    id: 14,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 7),
  },
  {
    id: 15,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 8),
  },
  {
    id: 16,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 9),
  },
];

const ScheduleSection = () => {
  const { taskList } = useContext(projectListContext);

  const [activeDate, setDate] = useState(`${date}`.split(" ")[2]);

  const [activeTab, setTab] = useState("All");

  const navigate = useNavigate();

  const displaydates = (eachDate) => {
    const todayDate =
      activeDate.toString() === `${eachDate.dates}`.split(" ")[2];

    return (
      <li
        onClick={() => setDate(`${eachDate.dates}`.split(" ")[2])}
        key={eachDate.id}
        className={`${todayDate ? "active" : "inactive"}`}
      >
        <p>{`${eachDate.dates}`.split(" ")[1]}</p>
        <p>{`${eachDate.dates}`.split(" ")[2]}</p>
        <p>{`${eachDate.dates}`.split(" ")[0]}</p>
      </li>
    );
  };

  const displayTaskItems = (task) => {
    return (
      <li key={task.id}>
        <div className="task-info">
          <p>{task.projectname}</p>
          <h5>{task.description}</h5>
          <div>
            <FaClock />
            <p>{task.time}</p>
          </div>
        </div>
        <div className="task-status">
          {task.group === "study" ? (
            <PiBookOpenTextFill className="task-icons" />
          ) : task.group === "personal project" ? (
            <MdPersonPin className="task-icons" />
          ) : (
            <GiDiscGolfBag className="task-icons" />
          )}
          <p>{task.status}</p>
        </div>
      </li>
    );
  };

  const filterListItems =
    activeTab === "All"
      ? taskList
      : taskList.filter((each) => each.status === activeTab);

  return (
    <ScheduleSectionContainer>
      <header>
        <button onClick={() => navigate("/home")}>
          <IoArrowBackCircle />
        </button>
        <h3>Today's Task</h3>
        <button>
          <IoMdNotifications />
        </button>
      </header>
      <DisplayDates>{Dates.map((each) => displaydates(each))}</DisplayDates>
      <FilterTasks>
        <li
          onClick={() => setTab("All")}
          className={activeTab === "All" ? "active" : "inactive"}
        >
          All
        </li>
        <li
          onClick={() => setTab("To do")}
          className={activeTab === "To do" ? "active" : "inactive"}
        >
          To do
        </li>
        <li
          onClick={() => setTab("Progress")}
          className={activeTab === "Progress" ? "active" : "inactive"}
        >
          In Progress
        </li>
        <li
          onClick={() => setTab("Done")}
          className={activeTab === "Done" ? "active" : "inactive"}
        >
          Done
        </li>
      </FilterTasks>
      <TasksListContainer>
        {filterListItems.map((each) => displayTaskItems(each))}
      </TasksListContainer>
      <NavBar />
    </ScheduleSectionContainer>
  );
};

export default ScheduleSection;
