import styled from "styled-components";

import backgroundImg from "../../Images/bg img.jpg";

export const HomeContainer = styled.section`
  height: 100vh;
 
  width: 100vw;
  background-image: url("${backgroundImg}");
  background-size: cover;
  overflow:scroll;


  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding:10px 20px;
  }

  .user-details {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  header > .user-details > img {
    height: 35px;
    border-radius: 50%;
   
  }

  header > .user-details > div > p {
    font-weight: 600;
    color: #454545;
  }
  header > button {
    background-color: transparent;
    border:none;
    outline;none;
    font-size:23px;
    cursor:pointer;
  }

  
`;

export const DayProgress = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-shadow: 1px 1px 10px #2e1261;
  background-color: #2e1261;
  margin: 15px;
  border-radius: 15px;
  font-family: roboto;

  div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  div > p {
    font-weight: 600;
    color: #fff;
  }

  div > button {
    padding: 6px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    color: #2e1261;
    font-weight: 700;
    font-family: sans-serif;
    font-size: 14px;
  }

  .progress-bar {
    height: 60px;
    font-weight: 600;
  }
`;

export const TaskGroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 15px;
  margin-bottom: 70px;
  overflow: scroll;
  min-height: 300px;

  h2 {
    font-family: sans-serif;
  }

  .task-group {
    background-color: #fff;
    border-radius: 15px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 1px 1px 10px #454545;
  }

  .task-group > .group-details-container {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .task-group > .group-details-container > .task-icon {
    font-size: 25px;
    color: #171747;
  }

  .task-group > .group-details-container > div > p {
    font-weight: 600;
  }

  .task-group > .group-details-container > div > .tasks-count {
    font-weight: 600;
    color: grey;
    font-size: 13px;
    margin-top: 6px;
  }

  .progress-bar {
    height: 40px;
    width: 40px;
    font-weight: 600;
  }
`;
