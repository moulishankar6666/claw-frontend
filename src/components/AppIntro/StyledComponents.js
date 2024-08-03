import styled from "styled-components";

import backgroundImg from "../../Images/bg img.jpg";

export const EntryPageMainContainer = styled.main`
  width: 95vw;
  height: 95vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 13px;
  box-shadow: 1px 1px 16px #454545;
  border-radius: 30px;
  background-color: transparent;

  background-image: url("${backgroundImg}");
  background-size: cover;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  .image-container {
    display: flex;
    justify-content: center;
    padding: 10px;
  }

  .image-container > img {
    height: 300px;
    text-align: center;
  }

  .app-intro {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  .app-intro > h3 {
    font-size: 22px;
    font-weight: 900;
    font-family: "Lexend Zetta", sans-serif;
    letter-spacing: -3.5px;
    line-height: 25px;
  }

  .app-intro > p {
    font-size: 12px;
    width: 60%;
    font-weight: 500;
    opacity: 0.8;
  }

  .app-intro > .intro-button-container {
    margin-top: 10px;
    height: 40px;
    width: 80%;

    display: flex;
    justify-content: space-around;
  }
  .app-intro > .intro-button-container > .login-button,
  .app-intro > .intro-button-container > .signin-button {
    background-color: #171747;
    width: 100px;
    border-radius: 8px;
    color: #fff;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 5px;
    cursor: pointer;
  }
`;
