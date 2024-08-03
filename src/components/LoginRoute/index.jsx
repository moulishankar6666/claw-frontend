import { UserInfoFormContainer, FormContainer } from "./styledcomponents";
//hooks
import { useState, useContext } from "react";
import { json, Navigate, useNavigate } from "react-router-dom";
//supabase
import { supabase } from "../client";
// context
import { projectListContext } from "../../App";
//packages
import Cookies from "js-cookie";

const LoginForm = () => {
  //state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //context
  const { userInfo, UserInformation } = useContext(projectListContext);
  const navigate = useNavigate();

  //submit func
  const submitForm = async (event) => {
    event.preventDefault();

    //options for POST request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ email, password }),
    };

    if (email && password) {
      // supabase retrun Error "Email limit exceeded"
      // try {
      //   const { data, error } = await supabase.auth.signInWithPassword({
      //     email: email,
      //     password: password,
      //   });
      //   console.log(data);
      //   Cookies.set("token", );
      // } catch (error) {
      //   alert(error);
      // }

      //fetching POST request

      const response = await fetch(
        "https://todos-api-7oya.onrender.com/login",
        options
      );
      const data = await response.json();
      console.log(data);

      if (response.ok === true) {
        UserInformation(data.user[0]);
        alert(data.text);
        Cookies.set("user", JSON.stringify(data.user[0]));
        navigate("/home");
      } else {
        if (window.confirm("click Ok Navigate to Signin page")) {
          navigate("/signin");
        }
      }
    } else {
      alert("Enter registerd email and password");
    }
  };

  return true ? (
    <UserInfoFormContainer>
      <FormContainer onSubmit={submitForm} className="form">
        <h2>
          Task Management & <br /> To-Do List
        </h2>

        <div>
          <label>
            Email <span>*</span>
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email Id"
            type="Email"
            value={email}
          />
        </div>
        <div>
          <label>
            Password <span>*</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
            value={password}
          />
        </div>

        <button type="submit">LogIn</button>
      </FormContainer>
    </UserInfoFormContainer>
  ) : (
    <Navigate replace to={"/home"}></Navigate>
  );
};

export default LoginForm;
