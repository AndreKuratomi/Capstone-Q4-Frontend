import styled from "styled-components";

export const ContainerPatient = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;

  input {
    display: block;
    padding: 10px;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
    margin: 10px auto;
  }

  input:hover {
    outline: 1px solid rgb(68, 196, 249, 100%);
  }
`;

export const PatientList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  margin: 0 auto;
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
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
`;

export const BoxPatient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`;

export const CardPatient = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 270px;
  height: 150px;
  margin: 5px;
  border-radius: 10px;
  background: rgb(68, 196, 249, 100%);
  box-shadow: 10px 10px 10px -9px rgba(0, 0, 0, 0.2);

  .left {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    width: 25%;
    height: 80%;
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 50%;
    height: 80%;
    color: rgba(248, 248, 249);
  }
`;
