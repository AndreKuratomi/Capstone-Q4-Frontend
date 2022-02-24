import { Link, Outlet } from "react-router-dom";
import { ContainerMain } from "./style";
import { RegisterSecretary } from "../RegisterSecretary";
import { BoxImages } from "./style";
import paciente from "../../assets/paciente.svg";
import medico from "../../assets/medico.svg";
import { useState } from "react";

export const RegisterMain = () => {
  const [modal, setModal] = useState(false);
  const IsModal = () => setModal(true);
  return (
    <>
      <ContainerMain>
        <h1>Escolha uma opção para se cadastrar</h1>
        <BoxImages>
          <div className="boximg">
            <h2>Paciente</h2>
            <Link to="/registerpatient">
              <button onClick={IsModal}>
                <img src={paciente} alt="paciente" />
              </button>
            </Link>
          </div>
          <div className="boximg">
            <h2>Médico</h2>
            <Link to="/registerprofessional">
              <button onClick={IsModal}>
                <img src={medico} alt="medico" />
              </button>
            </Link>
          </div>
        </BoxImages>
      </ContainerMain>
    </>
  );
};
