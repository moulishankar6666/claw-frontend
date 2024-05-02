import { AddProjectContainer, ProjectFormContainer } from "./StyledComponents";

// icons
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { GiDiscGolfBag } from "react-icons/gi";
import { MdPersonPin } from "react-icons/md";
import { PiBookOpenTextFill } from "react-icons/pi";

// hooks
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";

import { projectListContext } from "../../App";

const AddNewTask = () => {
  const { updateList } = useContext(projectListContext);

  const [projectDetails, setProjectDetails] = useState({
    project: "",
    description: "",
    startDate: "",
    time: "",
    group: "",
    error: false,
  });

  const setgroup = (e) => {
    setProjectDetails({ ...projectDetails, group: e.target.value });
  };

  const setProjectName = (e) => {
    setProjectDetails({ ...projectDetails, project: e.target.value });
  };

  const setDescription = (e) => {
    setProjectDetails({ ...projectDetails, description: e.target.value });
  };

  const setStartDate = (e) => {
    setProjectDetails({ ...projectDetails, startDate: e.target.value });
  };

  const setTime = (e) => {
    setProjectDetails({ ...projectDetails, time: e.target.value });
  };

  const navigate = useNavigate();
  const onClickBackButton = () => navigate("/home");

  const onClickSubmitForm = async (e) => {
    e.preventDefault();
    if (
      projectDetails.project &&
      projectDetails.description &&
      projectDetails.group &&
      projectDetails.startDate &&
      projectDetails.time
    ) {
      updateList({
        id: `${projectDetails.project}${projectDetails.project.length}`,
        projectname: projectDetails.project,
        description: projectDetails.description,
        time: `${projectDetails.time} ${
          parseInt(projectDetails.time.slice(0, 2)) < 12 ? "AM" : "PM"
        }`,
        group: projectDetails.group,
        status: "To do",
        date: projectDetails.startDate,
      });
      await setProjectDetails({ ...projectDetails, error: false });
      navigate("/schedule");
    } else {
      setProjectDetails({ ...projectDetails, error: true });
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
        <h4>Add Project</h4>
        <button>
          <IoMdNotifications />
        </button>
      </header>
      <ProjectFormContainer onSubmit={onClickSubmitForm}>
        <div className="task-group-container">
          {projectDetails.group === "study" ? (
            <PiBookOpenTextFill className="task-icon" />
          ) : projectDetails.group === "personal project" ? (
            <MdPersonPin className="task-icon" />
          ) : (
            <GiDiscGolfBag className="task-icon" />
          )}
          <div>
            <label>Task Group</label>
            <select value={projectDetails.group} onChange={setgroup}>
              <option value=""></option>
              <option value="office project">Office project</option>
              <option value="personal project">Personal project</option>
              <option value="study">Study</option>
            </select>
          </div>
        </div>

        <div className="input-container">
          <label>Project Name</label>
          <input
            onChange={setProjectName}
            placeholder="Enter project Name"
            type="text"
            value={projectDetails.project}
          />
        </div>

        <div className="input-container ">
          <label>Description</label>
          <input
            value={projectDetails.description}
            onChange={setDescription}
            placeholder="Enter about project"
            type="text"
          />
        </div>

        <div className="input-container">
          <label>Start Date</label>
          <input
            value={projectDetails.startDate}
            onChange={setStartDate}
            type="date"
          />
        </div>
        <div className="input-container">
          <label>Time</label>
          <input
            value={projectDetails.endDate}
            onChange={setTime}
            type="time"
          />
        </div>

        {projectDetails.error && (
          <p className="error-msg">* Fill all input fields</p>
        )}

        <button type="submit" className="add-project-btn">
          Add project
        </button>
      </ProjectFormContainer>
    </AddProjectContainer>
  );
};

export default AddNewTask;
