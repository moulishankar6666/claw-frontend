import { AddProjectContainer, ProjectFormContainer } from "./StyledComponents";

// icons
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";

// hooks
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

// context
import { projectListContext } from "../../App";

//packages

import Cookies from "js-cookie";

const AddNewTask = () => {
  const { userInfo } = useContext(projectListContext);

  const [todoDetails, setTodotDetails] = useState({
    title: "",
    description: "",
    startDate: "",
    time: "",
    error: false,
  });

  const setProjectName = (e) => {
    setTodotDetails({ ...todoDetails, title: e.target.value });
  };

  const setDescription = (e) => {
    setTodotDetails({ ...todoDetails, description: e.target.value });
  };

  const setStartDate = (e) => {
    setTodotDetails({ ...todoDetails, startDate: e.target.value });
  };

  const setTime = (e) => {
    setTodotDetails({ ...todoDetails, time: e.target.value });
  };

  const navigate = useNavigate();
  const onClickBackButton = () => navigate("/home");

  const onClickSubmitForm = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ ...todoDetails, userid: userInfo._id }),
    };

    if (
      todoDetails.title &&
      todoDetails.description &&
      todoDetails.startDate &&
      todoDetails.time
    ) {
      const response = await fetch(
        "https://todos-api-7oya.onrender.com/todo",
        options
      );
      const data = await response.json();
      setTodotDetails({ ...todoDetails, error: false });

      if (response.ok) {
        alert(data.text);
        navigate("/schedule");
      }
    } else {
      setTodotDetails({ ...todoDetails, error: true });
    }
  };

  return (
    <AddProjectContainer>
      <header>
        <button>
          <IoArrowBackCircle
            onClick={onClickBackButton}
            className="task-icon"
          />
        </button>
        <h4>Add New Todo</h4>
        <button>
          <IoMdNotifications />
        </button>
      </header>
      <ProjectFormContainer onSubmit={onClickSubmitForm}>
        <div className="input-container">
          <label>Title</label>
          <input
            onChange={setProjectName}
            placeholder="Enter project Name"
            type="text"
            value={todoDetails.project}
          />
        </div>

        <div className="input-container ">
          <label>Description</label>
          <input
            value={todoDetails.description}
            onChange={setDescription}
            placeholder="Enter about project"
            type="text"
          />
        </div>

        <div className="input-container">
          <label>Start Date</label>
          <input
            value={todoDetails.startDate}
            onChange={setStartDate}
            type="date"
          />
        </div>
        <div className="input-container">
          <label>Time</label>
          <input value={todoDetails.endDate} onChange={setTime} type="time" />
        </div>

        {todoDetails.error && (
          <p className="error-msg">* Fill all input fields</p>
        )}

        <button type="submit" className="add-project-btn">
          Add Todo
        </button>
      </ProjectFormContainer>
    </AddProjectContainer>
  );
};

export default AddNewTask;
