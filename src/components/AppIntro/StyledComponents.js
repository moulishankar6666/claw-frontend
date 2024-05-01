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

  .app-intro > button {
    margin-top: 10px;
    height: 40px;
    width: 80%;
    border-radius: 12px;
    border: none;
    background-color: #171747;
    outlin: none;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    font-weight: 700;
    font-family: "roboto", sans-serif;
  }
`;
