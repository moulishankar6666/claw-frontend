import styled from "styled-components";

import backgroundImg from "../../Images/bg img.jpg";

export const AddProjectContainer = styled.section`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: url("${backgroundImg}");
  background-size: cover;
  height: 100vh;
  width: 100vw;
  filter: blur(100px;);

  header {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  header > h4 {
    font-size: 20px;
  }

  header > button {
    background-color: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    font-size: 25px;
    position: relative;
  }
`;

export const ProjectFormContainer = styled.form`
  background-color: transparent;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  padding: 20px;
  overflow: scroll;
  margin-bottom: 10px;

  .task-group-container {
    width: 80%;
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    padding: 10px;
    gap: 15px;
    background-color: #fff;
    box-shadow: 1px 1px 10px #454545;
  }

  .task-group-container > .task-icon {
    font-size: 23px;
    color: #ed6f6f;
    align-self: center;
  }

  .task-group-container > div {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    gap: 10px;
  }

  .task-group-container > div > label {
    font-size: 15px;
    font-weight: 600;
  }

  .task-group-container > div > select {
    border: none;
    outline: none;
    cursor: pointer;
    widht: 100%;
  }

  .input-container {
    width: 80%;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
    background-color: #fff;
    box-shadow: 1px 1px 10px #454545;
  }

  .input-container > input {
    border: transparent solid;
    outline: none;
    cursor: pointer;
    flex-grow: 1;
  }

  .input-container > label {
    font-size: 15px;
    font-weight: 600;
  }

  .add-project-btn {
    width: 80%;
    min-height: 40px;
    border-radius: 10px;
    border: none;
    outline: none;
    background-color: #171747;
    color: #fff;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
  }

  .error-msg {
    color: red;
    font-weight: bold;
    font-size: 13px;
  }
`;
