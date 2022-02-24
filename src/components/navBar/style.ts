import styled from "styled-components";

export const ContainerNavBar = styled.div`
  width: 250px;
  .boxnav {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(
      to bottom right,
      rgb(68, 196, 249, 100%),
      rgb(31, 96, 203, 100%)
    );
    color: rgba(248, 298, 241, 0.9);

    .nav {
      height: 70%;
      width: 100%;
      margin-left: 15px;
      /* overflow-x: hidden; */
    }

    .nav ul li {
      display: flex;
      align-items: center;
      width: 268px;
      margin: 10px 0;
      list-style: none;
      transition: 0.5s;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
    }

    .nav ul li button {
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px 0;
      z-index: 999;
      background: transparent;
      /* overflow: hidden; */
      border: none;
      color: rgba(248, 298, 241, 0.9);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      cursor: pointer;
    }
    .nav ul li svg {
      width: 30px;
      height: 30px;
      margin: 0 10px;
      padding-left: 5px;
    }

    .nav ul li:hover {
      width: 268px;
      background: rgba(248, 298, 241, 0.9);
      color: rgb(31, 96, 203, 100%);
    }
    .nav ul li button:hover {
      width: 268px;
      background: rgba(248, 298, 241, 0.9);
      color: rgb(31, 96, 203, 100%);
    }
  }
  @media only screen and (max-width: 768px) {
    width: 70px;
    overflow-x: hidden;

    .boxnav:hover {
      width: 100vw;
    }
    .title {
      display: none;
    }
    h1 {
      display: none;
    }
  }
`;
