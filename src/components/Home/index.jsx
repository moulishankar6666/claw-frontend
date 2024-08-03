import { HomeContainer } from "./StyledComponents.js";

// icons
import { IoMdNotifications } from "react-icons/io";
import { GiDiscGolfBag } from "react-icons/gi";
import { MdPersonPin } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";

// images
import maleProfile from "../../Images/male profile.jpg";
import femaleProfile from "../../Images/female profile.jpg";

//hooks
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

// components
import NavBar from "../NavBar";

//context
import { projectListContext } from "../../App";

const Home = () => {
  const { userInfo } = useContext(projectListContext);
  const navigate = useNavigate();

  return (
    <HomeContainer>
      <div className="main-container">
        <div className="sub-container">
          <h1>Welcome </h1>
          <h1>
            {userInfo.firstname.charAt(0).toUpperCase() +
              userInfo.firstname.slice(1) +
              " " +
              userInfo.lastname.charAt(0).toUpperCase() +
              userInfo.lastname.slice(1)}
          </h1>
        </div>
        <button
          className="show-todos-btn"
          onClick={() => navigate("/schedule")}
        >
          Show todos
        </button>
      </div>
      <NavBar />
    </HomeContainer>
  );
};

export default Home;
