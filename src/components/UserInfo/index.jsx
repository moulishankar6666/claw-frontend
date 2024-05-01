import { UserInfoFormContainer, FormContainer } from "./styledComponents";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

const UserInfoForm = () => {
  const [username, setname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");

  const navigate = useNavigate();

  const submitForm = (event) => {
    event.preventDefault();
    const userDetails = { username: username, email: email, gender: gender };
    if (username && email && gender) {
      localStorage.setItem("userDetails", JSON.stringify(userDetails));
      navigate("/home");
    } else {
      alert("Fill all input fields");
    }
  };
  return (
    <UserInfoFormContainer>
      <FormContainer onSubmit={submitForm} className="form">
        <h2>
          Task Management & <br /> To-Do List
        </h2>
        <div>
          <label>
            Username<span>*</span>
          </label>
          <input
            onChange={(e) => setname(e.target.value)}
            placeholder="Enter your name.."
            type="text"
          />
        </div>
        <div>
          <label>
            Email <span>*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email Id"
            type="Email"
          />
        </div>
        <div>
          <label>
            Gender <span>*</span>
          </label>
          <select defaultValue={""} onChange={(e) => setGender(e.target.value)}>
            <option value=""></option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Others">Others</option>
          </select>
        </div>
        <button>Next</button>
      </FormContainer>
    </UserInfoFormContainer>
  );
};

export default UserInfoForm;
