import { UserInfoFormContainer, FormContainer } from "./styledComponents";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

// import { supabase } from "../client";

const SigninForm = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const submitForm = async (event) => {
    event.preventDefault();

    // store UserDetails in Mongodb
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
      }),
    };
    //supabase
    try {
      if (email && password && firstname && lastname) {
        // supabase is creating new user but it displays error "email limit exceeds"
        // // const { data, error } = await supabase.auth.signUp({
        // //   email: email,
        // //   password: password,
        // //   options: {
        // //     data: {
        // //       first_name: firstname,
        // //       last_name: lastname,
        // //     },
        // //   },
        // // });
        // // if (data) {
        // //   console.log(data);
        // // }
        // // if (error) {
        // //   alert(error.message);
        // // }

        // Fetch register api

        const response = await fetch(
          "https://todos-api-7oya.onrender.com/register",
          options
        );
        const data = await response.json();

        if (response.ok) {
          alert(data.text);
          navigate("/login");
        } else {
          alert(data.error);
        }
      } else {
        alert("Fill all fields");
      }
    } catch (error) {
      console.log(error);
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
            Firstname<span>*</span>
          </label>
          <input
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="Enter your firstname"
            type="text"
          />
        </div>
        <div>
          <label>
            Lastname <span>*</span>
          </label>
          <input
            type="text"
            placeholder="Enter your lastname"
            onChange={(e) => setLastname(e.target.value)}
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
            Password <span>*</span>
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            type="password"
          />
        </div>

        <button>SignUp</button>
      </FormContainer>
    </UserInfoFormContainer>
  );
};

export default SigninForm;
