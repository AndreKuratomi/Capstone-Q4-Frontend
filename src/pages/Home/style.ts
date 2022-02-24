import styled from "styled-components";

export const ContainerHome = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 95vh;
  background: rgba(248, 298, 241, 0.9);
  border-radius: 20px;
  overflow-y: scroll hidden;
`;

export const Container = styled.div`
  background-color: #f7f5f5;
  width: 290px;
  height: 210px;
  padding: 10px 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  margin: 5px;

  h1 {
    margin: 10px 0;
  }

  button {
    border-radius: 20px;
    width: 100%;
    border: 1px solid transparent;
    padding: 5px 10px;
    margin-top: 5px;
    color: white;
    background-color: #4ebef2;
    transition: all 0.3s;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5);

    :hover {
      cursor: pointer;
      color: #4ebef2;
      background-color: white;
      border: 1px solid #4ebef2;
    }
  }
`;
