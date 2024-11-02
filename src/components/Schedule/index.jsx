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
import { MdDelete } from "react-icons/md";

// Hooks
import { useState, useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
  {
    id: 17,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 10),
  },
  {
    id: 18,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 11),
  },
  {
    id: 19,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 12),
  },
  {
    id: 20,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 13),
  },
  {
    id: 21,
    dates: new Date(date.getFullYear(), date.getMonth(), date.getDate() + 14),
  },
];

const apiStatus = {
  initial: "INITIAL",
  progress: "PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const ScheduleSection = () => {
  const { updateList, taskList, userInfo } = useContext(projectListContext);
  const navigate = useNavigate();

  const [activeDate, setDate] = useState(`${date}`.split(" ")[2]);
  const [activeTab, setTab] = useState("All");
  const [Status, setStatus] = useState(apiStatus.initial);

  useEffect(() => {
    const fetchGetdata = async () => {
      try {
        const response = await fetch(
          `https://todos-api-7oya.onrender.com/todos/${userInfo._id}`
        );
        if (!response.ok) {
          alert("error");
        }
        let data = await response.json();
        updateList(data);
      } catch (error) {
        alert(error);
      } finally {
        setStatus(apiStatus.success);
      }
    };
    fetchGetdata();
  }, []);

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
    const onclickDelete = async () => {
      try {
        const respone = await fetch(
          `https://todos-api-7oya.onrender.com/todo/${task._id}`,
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
          }
        );
        const data = await respone.json();
        // eslint-disable-next-line no-restricted-globals
        updatedList(data)
        alert(data.text);
      } catch (error) {
        alert(error);
      }
    };
    return (
      <li key={task._id}>
        <div className="task-info">
          <p>{task.title}</p>
          <h5>{task.description}</h5>
          <div>
            <FaClock />
            <p>{task.time}</p>
          </div>
        </div>
        <div className="task-status">
          <p>{task.todoStatus}</p>
          <button onClick={onclickDelete} className="delete-btn">
            <MdDelete />
          </button>
        </div>
      </li>
    );
  };

  const notasks = () => {
    return <h1 className="no-task-msg">no {activeTab} tasks in this day </h1>;
  };

  const onSuccessView = () => {
    const filterListItems =
      activeTab === "All"
        ? taskList
        : taskList.filter((each) => each.todoStatus === activeTab);

    const dateWiseFilter = filterListItems.filter(
      (each) => each.date.split("-")[2] === activeDate
    );

    return (
      <>
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
          {dateWiseFilter &&
            dateWiseFilter.map((each) => displayTaskItems(each))}
          {dateWiseFilter.length === 0 && notasks()}
        </TasksListContainer>
      </>
    );
  };

  const onProgressView = () => {
    return <h1>please wait ...</h1>;
  };

  const renderStatus = () => {
    switch (Status) {
      case apiStatus.success:
        return onSuccessView();
      case apiStatus.progress:
        return onProgressView();

      default:
        return null;
    }
  };
  return (
    <ScheduleSectionContainer>
      {renderStatus()}

      <NavBar />
    </ScheduleSectionContainer>
  );
};

export default ScheduleSection;
