import styled from "styled-components";

export const ContainerMobile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  height: 400px;

  border-radius: 5px;
  background: rgba(248, 248, 251, 1);

  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 15vh;
    background: rgba(85, 110, 230, 0.25);
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
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    input {
      width: 80%;
    }
  }

  a {
    text-decoration: none;
    color: rgba(85, 110, 230, 1);
  }
  .desk {
    display: none;
  }
  img {
    width: 80px;
  }
`;

//DESKTOP

export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 80%;
  height: 70%;

  background: rgba(248, 298, 241, 0.8);
  border-radius: 5px;

  .test {
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
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  a {
    text-decoration: none;
    color: rgba(85, 110, 230, 1);
  }

  @media only screen and (min-width: 767px) {
    width: 87%;
  }
`;

export const LinkBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding-bottom: 10px;
`;

export const ButtonLogin = styled.button`
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

export const BoxInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 5px;
  width: 30%;
  height: 300px;

  h1 {
    font-size: 35px;
  }
  h3 {
    padding-top: 50px;
  }

  @media (max-width: 964px) {
    display: none;
  }
`;

export const BoxIputs = styled.div`
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
export const BoxForm = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  .cadastr-se {
    color: rgba(85, 110, 230, 1);
    padding: 5px 0;
  }
  img {
    width: 250px;
    border-radius: 50%;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 35%;
    height: 300px;
  }
  button:hover {
    box-shadow: 0px 5px 5px 4px rgba(0, 0, 0, 0.22);
  }

  @media only screen and (min-width: 964px) {
    justify-content: space-between;
  }
  form {
    width: 40%;
  }
  /* img {
    width: 40%;
  } */
`;
