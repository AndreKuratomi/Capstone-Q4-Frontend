import { useNavigate } from "react-router-dom";
import { FormLogin } from "../../components/formLogin";
import { ContainerHome } from "./style";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <ContainerHome>
      <h1>HOME</h1>
    </ContainerHome>
  );
};
