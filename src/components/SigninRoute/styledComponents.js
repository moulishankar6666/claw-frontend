import styled from "styled-components";

import backgroundImg from "../../Images/bg img.jpg";

export const UserInfoFormContainer = styled.section`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-image: url("${backgroundImg}");
  background-size: cover;
`;

export const FormContainer = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 10px 20px;
  border-radius: 25px;
  box-shadow: 1px 1px 16px -5px #000;
  padding: 20px;
  background-image: url("${backgroundImg}");
  background-position: top right;

  h2 {
    text-align: center;
    font-size: 20px;
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  div > label {
    font-size: 13px;
    font-weight: 600;
    padding-left: 2px;
  }

  div > label > span {
    color: red;
    margin-left: 5px;
  }

  div > input {
    border-radius: 5px;
    border: #000 solid 0.5px;
    outline: none;
    height: 35px;
    padding-left: 5px;
    border: none;
  }

  div > select > option {
    font-size: 15px;
  }

  button {
    width: 120px;
    height: 40px;
    border: none;
    background-color: #171747;

    margin-top: 15px;
    border-radius: 50px;
    color: #fff;
    font-weight: 700;
    font-size: 16px;
    align-self: center;
    cursor: pointer;
    transition: transform 0.1s ease;
    &:hover {
      transform: scale(1.05);
    }
  }

  @media screen and (min-width: 481px) {
    height: 90%;
    width: 80%;
    align-items: center;

    div {
      width: 370px;
    }
  }

  @media screen and (min-width: 768px) {
    height: 90%;
    width: 50%;

    h2 {
      font-size: 30px;
    }
  }
`;
