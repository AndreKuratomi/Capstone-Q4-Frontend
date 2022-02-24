import styled from "styled-components";

export const ContainerProfessionals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;

  input {
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
  }
  input:hover {
    border: 2px solid rgb(68, 196, 249, 100%);
  }
`;

export const ListProfessionals = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 80%;
  height: 85vh;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const CardProfessionals = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 5px;
  border-radius: 10px;
  background-image: linear-gradient(
    to bottom right,
    rgb(68, 196, 249, 100%),
    rgb(31, 96, 203, 100%)
  );
  color: rgba(248, 298, 241);

  button {
    width: 60%;
    padding: 10px;
    border: none;
    border-radius: 10px;
    background: rgba(248, 298, 241);
    color: rgb(31, 96, 203, 100%);
    border: 1px solid rgba(248, 298, 241);

    cursor: pointer;
  }

  button:hover {
    color: rgba(248, 298, 241);
    font-weight: bold;
    background-image: linear-gradient(
      to bottom right,
      rgb(68, 196, 249, 100%),
      rgb(31, 96, 203, 100%)
    );
    border: 1px solid rgb(68, 196, 249, 100%);
    transition: 0.5s;
  }

  button:active {
    background: rgb(68, 196, 249, 100%);
    color: rgba(248, 298, 241);
    transition: 0.1s;
  }
`;
