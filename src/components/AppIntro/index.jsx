import { EntryPageMainContainer } from "./StyledComponents";

import Entryimg from "../../Images/entry page img.png";

import { useNavigate } from "react-router-dom";

const EntryPage = () => {
  const navigate = useNavigate();

  const name = JSON.parse(localStorage.getItem("userDetails"));

  const clickStartBtn = () => {
    if (name) {
      return navigate("/home");
    } else {
      return navigate("/user-info");
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
        <button onClick={clickStartBtn}>Let's Start</button>
      </div>
    </EntryPageMainContainer>
  );
};
export default EntryPage;
