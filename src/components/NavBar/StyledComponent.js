import styled from "styled-components";

export const NavContainer = styled.nav`
  width: 100%;
  height: 60px;
  background-color: #c5c3f0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: fixed;
  bottom: 0;

  .nav-link > button {
    background-color: transparent;
    outline: none;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
  .add-new {
    position: relative;
  }

  .add-new > button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: -53px;
    left: -20px;
    font-size: 45px;
    border-radius: 50%;
    border-bottom: transparent solid 4px;
    border-left: transparent solid 4px;
    border-top: transparent solid 4px;
    border-right: transparent solid 4px;
    background-color: #c5c3f0;
    widht: 10px;
    heiht: 10px;
    color: #171747;
    cursor: pointer;
    transform: rotate(-45deg);
    border: solid #fff;
  }
`;
