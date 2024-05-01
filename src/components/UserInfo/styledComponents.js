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
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
  padding: 20px;
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

  div > input,
  div > select {
    border-radius: 5px;
    border: #000 solid 0.5px;
    outline: none;
    height: 25px;
    padding-left: 5px;
    border: none;
  }

  div > select > option {
    font-size: 15px;
  }

  button {
    border: none;
    background-color: #171747;
    padding: 8px;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    font-size: 15px;
  }

  @media screen and (min-width: 768px) {
    height: 70%;
    width: 50%;

    h2 {
      font-size: 30px;
    }
  }
`;
