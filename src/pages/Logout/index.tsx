import { useNavigate } from "react-router-dom";
import { useStateContext } from "../../context/States";
import { ContainerLogout } from "./style";

export const Logout = () => {
  const navigate = useNavigate();
  const { setPageToLoad } = useStateContext();
  const handleLogout = () => {
    localStorage.clear();
    setPageToLoad("Home");
    navigate("/login");
  };

  return (
    <ContainerLogout>
      <h2>Deseja mesmo sair?</h2>
      <button onClick={handleLogout}>Sim</button>
    </ContainerLogout>
  );
};
