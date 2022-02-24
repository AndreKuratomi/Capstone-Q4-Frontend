import styled from "styled-components";

export const ContainerLogout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;

  button {
    width: 100px;
    margin-top: 10px;
    padding: 10px;
    border: 1px solid transparent;
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
`;
