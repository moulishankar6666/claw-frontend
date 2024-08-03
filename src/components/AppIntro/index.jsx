import { EntryPageMainContainer } from "./StyledComponents";

import Entryimg from "../../Images/entry page img.png";

import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const clickBtn = (value) => {
    if (value === "login") {
      navigate("/login");
    } else {
      navigate("/signin");
    }
  };

  return (
    <EntryPageMainContainer>
      <div className="image-container">
        <img src={Entryimg} alt="entry img" />
      </div>
      <div className="app-intro">
        <h3>
          Task Management & <br /> To-Do List
        </h3>
        <p>
          This productive tool is designed to help you better manage your task
          project-wise conveniently!
        </p>
        <div className="intro-button-container">
          <button onClick={() => clickBtn("login")} className="login-button">
            LogIn
          </button>
          <button onClick={() => clickBtn("signin")} className="signin-button">
            SignIn
          </button>
        </div>
      </div>
    </EntryPageMainContainer>
  );
};
export default EntryPage;
