import styled from "styled-components";

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 350px;
  height: 420px;
  position: absolute;

  background: rgba(248, 248, 251, 1);
  border-radius: 5px 5px 0 0;

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 100%;
    height: 100px;

    background: rgba(85, 110, 230, 0.25);
    border-radius: 5px 5px 0 0;

    img {
      width: 100px;
    }

    svg {
      width: 15px;
      padding: 0;
      margin: -60px -50px 0 -20px;
      color: rgba(85, 110, 230, 1);
      cursor: pointer;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 100%;
  }

  .inputs {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    input {
      margin: 2px 0;
      border: none;
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: rgba(85, 110, 230, 1);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px;

  border: none;
  border-radius: 5px;
  background: rgba(85, 110, 230, 1);
  color: white;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
`;
