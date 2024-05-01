import {
  HomeContainer,
  TaskGroupContainer,
  DayProgress,
} from "./StyledComponents.js";

// icons
import { IoMdNotifications } from "react-icons/io";
import { GiDiscGolfBag } from "react-icons/gi";
import { MdPersonPin } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";

// images
import maleProfile from "../../Images/male profile.jpg";
import femaleProfile from "../../Images/female profile.jpg";

// progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

//hooks
import { useNavigate } from "react-router-dom";

// components
import NavBar from "../NavBar";

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("userDetails"));
  if (user === null || user === undefined) {
    navigate("/");
  } else {
    return (
      <HomeContainer>
        <header>
          <div className="user-details">
            <img
              src={user.gender === "Male" ? maleProfile : femaleProfile}
              alt="user-profile"
            />
            <div>
              <p>Hello!</p>
              <h3>
                {user.username.charAt(0).toUpperCase() + user.username.slice(1)}
              </h3>
            </div>
          </div>
          <button>
            <IoMdNotifications />
          </button>
        </header>
        <DayProgress>
          <div>
            <p>Your today's task</p>
            <button onClick={() => navigate("/schedule")}>View Task</button>
          </div>
          <div>
            <CircularProgressbar
              className="progress-bar"
              value={60}
              text={`${60}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#2e1261",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "#fcfafa6b",
              })}
            />
          </div>
        </DayProgress>

        <TaskGroupContainer>
          <h2>Task Groups</h2>
          <div className="task-group">
            <div className="group-details-container">
              <GiDiscGolfBag className="task-icon" />
              <div>
                <p>Office projects</p>
                <p className="tasks-count">2 Tasks</p>
              </div>
            </div>
            <CircularProgressbar
              className="progress-bar"
              value={60}
              text={`${60}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#171747",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="task-group">
            <div className="group-details-container">
              <MdPersonPin className="task-icon" />
              <div>
                <p>Personal projects</p>
                <p className="tasks-count">2 Tasks</p>
              </div>
            </div>
            <CircularProgressbar
              className="progress-bar"
              value={60}
              text={`${60}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#171747",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </div>
          <div className="task-group">
            <div className="group-details-container">
              <PiBookOpenTextFill className="task-icon" />
              <div>
                <p>Daily Study</p>
                <p className="tasks-count">2 Tasks</p>
              </div>
            </div>
            <CircularProgressbar
              className="progress-bar"
              value={60}
              text={`${60}%`}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#171747",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
              })}
            />
          </div>
        </TaskGroupContainer>
        <NavBar />
      </HomeContainer>
    );
  }
};

export default Home;
