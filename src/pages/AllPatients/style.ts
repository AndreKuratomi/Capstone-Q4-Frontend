import styled from "styled-components";

export const ContainerPatient = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;

  input {
    padding: 10px;
    border: 1px solid rgb(68, 196, 249, 100%);
    border-radius: 5px;
  }

  input:hover {
    border: 2px solid rgb(68, 196, 249, 100%);
  }
`;
