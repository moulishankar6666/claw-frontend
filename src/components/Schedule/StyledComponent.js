import styled from "styled-components";

import backgroundImg from "../../Images/bg img.jpg";

export const ScheduleSectionContainer = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url("${backgroundImg}");
  background-size: cover;
  overflow: scroll;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }

  header > button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 25px;
    font-family: sans-serif;
  }
`;

export const DisplayDates = styled.ul`
  list-style-type: none;
  padding: 15px;
  display: flex;
  gap: 20px;
  scroll-snap-type: x mandatory;

  overflow-x: scroll;
  cursor: pointer;

  li {
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    gap: 3px;
    box-shadow: 1px 1px 8px grey;
    min-width: 80px;
    min-height: 90px;
    padding: 10px;
  }

  .active {
    background-color: #171747;
    color: #fff;
    scroll-snap-align: center;
  }

  .inactive {
    background-color: #fff;
    color: #171747;
  }

  li > p {
    font-weight: 700;
  }
`;

export const FilterTasks = styled.ul`
  list-style-type: none;
  padding: 5px 15px;
  display: flex;
  gap: 20px;
  overflow: scroll;

  li {
    background-color: #c5c3f0;
    color: #171747;
    font-weight: 700;
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 13px;
  }

  .active {
    background-color: #171747;
    color: #fff;
    scroll-snap-align: center;
  }

  .inactive {
    background-color: #c5c3f0;
    color: #171747;
  }
`;

export const TasksListContainer = styled.ul`
  list-style-type: none;
  padding: 15px;
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  li {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: 1px 1px 8px grey;
  }
  li > .task-info {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  li > .task-info > p {
    font-size: 13px;
    font-weight: 500;
    color: #454545;
  }
  li > .task-info > div {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 12px;
    font-weight: 500;
    color: #454545;
  }

  li > .task-info > h5 {
    font-size: 15px;
  }

  li > .task-status {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: end;
  }

  li > .task-status > p {
    background-color: #c5c3f0;
    padding: 5px 10px;
    font-size: 10px;
    border-radius: 10px;
    color: #171747;
    font-weight: bold;
  }

  li > .task-status > .task-icons {
    font-size: 20px;
    color: #171747;
    margin-right: 10px;
  }

  .no-task-msg {
    text-align: center;
    padding: 20px 0px;
  }
`;
