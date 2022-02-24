import styled, { keyframes } from "styled-components";

export const ContainerAppointments = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;
  position: relative;

  svg {
    width: 20px;
    height: 20px;
    color: rgb(68, 196, 249, 100%);
    z-index: 5;
    margin: 8px 0px 0 8px;
    cursor: pointer;

    @media (min-width: 767px) {
      display: none;
    }
  }
  .close {
    color: rgba(248, 298, 241, 0.9);
  }
`;

export const BoxSearch = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  input {
    padding: 10px;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
  }

  input:hover {
    border: 2px solid rgb(68, 196, 249, 100%);
  }

  button {
    margin: 0px 5px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background: rgb(68, 196, 249, 100%);
    color: rgba(248, 298, 241);

    cursor: pointer;
  }

  button:hover {
    color: rgb(68, 196, 249, 100%);
    font-weight: bold;
    background: rgba(248, 298, 241);
    border: 1px solid rgb(68, 196, 249, 100%);
    transition: 0.5s;
  }

  button:active {
    background: rgb(68, 196, 249, 100%);
    color: rgba(248, 298, 241);
    transition: 0.1s;
  }

  @media (max-width: 379px) {
    button {
      margin: 5px 0;
      width: 200px;
    }
  }
`;

export const BoxAppointments = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: 60vh;
  margin-top: 20px;
`;

export const CardAppointments = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 270px;
  height: 150px;
  margin: 5px;
  border-radius: 10px;
  background: rgb(68, 196, 249, 100%);
  box-shadow: 10px 10px 10px -9px rgba(0, 0, 0, 0.2);

  span {
    margin: 1px 0;
  }
  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 35%;
    height: 80%;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 55%;
    height: 80%;
    color: rgba(248, 248, 249);
  }
`;

export const HeaderProfAdmin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const Ul = styled.ul`
  @media only screen and (min-width: 768px) {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
  }
`;

export const Li = styled.li`
  @media only screen and (min-width: 768px) {
    list-style: none;

    button {
      padding: 10px;
      border: none;
      border-radius: 5px;
      background: rgb(68, 196, 249, 100%);
      color: rgba(248, 298, 241);

      cursor: pointer;
    }

    button:hover {
      color: rgb(68, 196, 249, 100%);
      font-weight: bold;
      background: rgba(248, 298, 241);
      border: 1px solid rgb(68, 196, 249, 100%);
      transition: 0.5s;
    }

    button:active {
      background: rgb(68, 196, 249, 100%);
      color: rgba(248, 298, 241);
      transition: 0.1s;
    }
  }
`;

const appearFromRight = keyframes`
	from {
		opacity: 0;
		transform: translateX(100%)
	}
	to {
		opacity: 1;
		transform: translateX(0)
	}
`;

export const Menuhamburguer = styled.ul`
  display: none;
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 99%;
    height: 94.5vh;
    top: 1.5px;
    left: 1.2px;
    border-radius: 20px;
    background: rgb(68, 196, 249, 100%);
    transition: all 3s ease;
    animation: ${appearFromRight} 0.5s;

    li {
      z-index: 4;
      /* margin-top: 100px; */
      justify-content: center;
      align-items: center;
      list-style: none;
      padding: 8px;

      button .secundary {
        background: transparent;
        border: none;
        padding: 0;
      }

      button {
        width: 200px;
        padding: 10px;
        border: none;
        border-radius: 5px;
        background: rgb(68, 196, 249, 100%);
        color: rgba(248, 298, 241);
        border: 1px solid rgba(248, 298, 241);

        cursor: pointer;
      }

      button:hover {
        color: rgb(68, 196, 249, 100%);
        font-weight: bold;
        background: rgba(248, 298, 241);
        border: 1px solid rgb(68, 196, 249, 100%);
        transition: 0.5s;
      }

      button:active {
        background: rgb(68, 196, 249, 100%);
        color: rgba(248, 298, 241);
        transition: 0.1s;
      }
    }
  }
`;
