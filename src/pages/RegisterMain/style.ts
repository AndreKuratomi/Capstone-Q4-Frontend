import styled from "styled-components";

export const ContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    to bottom right,
    rgb(68, 196, 249, 100%),
    rgb(31, 96, 203, 100%)
  );

  h1 {
    color: rgba(248, 298, 241, 0.5);
    font-size: 40px;
    font-weight: 500;
  }
`;

export const BoxImages = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 90%;

  .boximg {
    text-align: center;
  }

  h2 {
    padding: 15px 0;
    color: rgba(248, 298, 241, 0.5);
  }

  img {
    width: 350px;
  }
  button {
    background: rgba(248, 298, 241, 0.5);
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.1, 1.1);
  }
  @media only screen and (max-width: 798px) {
    flex-direction: column;
    img {
      width: 200px;
    }
  }
`;
