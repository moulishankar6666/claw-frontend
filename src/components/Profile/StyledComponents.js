import styled from "styled-components";

import backgroundImg from "../../Images/bg img.jpg";

export const ProfileContainer = styled.section`
  height: 100vh;
  widht: 100vw;
  background-image: url("${backgroundImg}");
  background-size: cover;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
  }

  header > button {
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 25px;
    font-family: sans-serif;
  }

  .card-container {
    width: 60%;
    height: 70%;
    box-shadow: 1px 1px 8px grey;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 30px;
  }
  .card-container > .username {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    width: 100%;
    height: 40px;
  }

  .card-container > .username > img {
    height: 50px;
    border-radius: 100px;
  }

  .card-container > .user-details > div {
    display: flex;
    align-items: center;
    margin-top: 15px;
    font-weight: 500;
  }

  .card-container > .user-details > div > h4 {
    width: 100px;
  }

  .card-container > button {
    padding: 5px 25px;
    border-radius: 6px;
    outline: none;
    border: none;
    background-color: #171747;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    .card-container > .user-details > div {
      flex-direction: column;
      align-items: start;
    }
  }
`;
