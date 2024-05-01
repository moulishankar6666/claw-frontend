import { AddProjectContainer, ProjectFormContainer } from "./StyledComponents";

// icons
import { IoArrowBackCircle } from "react-icons/io5";
import { IoMdNotifications } from "react-icons/io";
import { GiDiscGolfBag } from "react-icons/gi";

// hooks
import { useNavigate } from "react-router-dom";

const AddNewTask = () => {
  const navigate = useNavigate();
  const onClickBackButton = () => navigate("/home");

  const onClickSubmitForm = (e) => {
    e.preventDefault();
    navigate("/");
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
          <GiDiscGolfBag className="task-icon" />
          <div>
            <label>Task Group</label>
            <select>
              <option value="Office project">Office project</option>
              <option value="Personal project">Personal project</option>
              <option value="Study">Study</option>
            </select>
          </div>
        </div>
        <div className="input-container">
          <label>Project Name</label>
          <input placeholder="Enter project Name" type="text" />
        </div>
        <div className="input-container ">
          <label>Description</label>
          <input placeholder="Enter about project" type="text" />
        </div>
        <div className="input-container">
          <label>Start Date</label>
          <input type="date" />
        </div>
        <div className="input-container">
          <label>End Date</label>
          <input type="date" />
        </div>

        <button className="add-project-btn">Add project</button>
      </ProjectFormContainer>
    </AddProjectContainer>
  );
};

export default AddNewTask;
