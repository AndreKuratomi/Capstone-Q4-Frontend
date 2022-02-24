import styled from "styled-components";

interface InputStyleProps {
  borderInput: boolean;
  colorInput: boolean;
}

export const ContainerInput = styled.div`
  width: 300px;
  text-align: center;

  .inputErrors {
    color: var(--orangeCore);
    margin-top: 5px;
    font-size: 12px;
  }
`;

export const InputBox = styled.div<InputStyleProps>`
  /* background: ${(props) => (props.borderInput ? "red" : "#ccc")}; */
  border: ${(props) =>
    props.colorInput ? "1px solid #ccc" : "1px solid black"};
  padding: 8px;
  display: flex;
  /* margin-top: -8px; */
  border-radius: 5px;

  input {
    border: none;
    background: transparent;
    font-size: 15px;
    margin: 5px 0px;
  }

  input::placeholder {
    color: rgba(173, 181, 189, 1);
  }
`;
