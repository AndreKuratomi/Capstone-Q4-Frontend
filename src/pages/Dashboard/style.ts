import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: rgba(248, 298, 241, 0.2);
`;

export const ContainerOutlet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% - 250px);
  height: 100vh;
  background: rgb(68, 196, 249, 100%);

  @media only screen and (max-width: 768px) {
    width: calc(100% - 70px);
  }
`;
