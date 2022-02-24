import { Outlet } from "react-router-dom";
import { NavBar } from "../../components/navBar";
import { ContainerMain, ContainerOutlet } from "./style";
import { AllProfessionals } from "../AllProfessionals";
import { AllAppointments } from "../AllAppointments";
import { useStateContext } from "../../context/States";
import { AllPatients } from "../AllPatients";
import { Logout } from "../Logout";
import { Home } from "../Home";

export const Dashboard = () => {
  const { pageToLoad } = useStateContext();

  const pages: {
    [key: string]: JSX.Element;
  } = {
    professionals: <AllProfessionals />,
    patients: <AllPatients />,
    appointments: <AllAppointments />,
    home: <Home />,
    logout: <Logout />,
  };

  return (
    <ContainerMain>
      <NavBar />
      <ContainerOutlet>
        {pages[pageToLoad]}
        <Outlet />
      </ContainerOutlet>
    </ContainerMain>
  );
};
