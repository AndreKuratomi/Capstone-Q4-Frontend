import { useEffect, useState } from "react";
import { useAppointment } from "../../context/Appointments";
import { useAuth } from "../../context/Auth";
import { useStateContext } from "../../context/States";
import {
  BoxAppointments,
  CardAppointments,
  ContainerAppointments,
  HeaderProfAdmin,
  Ul,
  Li,
  BoxSearch,
  Menuhamburguer,
} from "./style";
import { FiAlignJustify, FiX } from "react-icons/fi";

export const AllAppointments = () => {
  const { user } = useAuth();
  const { filterPatient, filterProfessional, filterTomorrow, filterWaitList } =
    useAppointment();
  const {
    appointmentsToLoad,
    setAppointmentsToLoad,
    profAppointment,
    setProfAppointment,
  } = useStateContext();
  const { appointmentPatient, appointmentProf, tomorrow, waitList } =
    useAppointment();
  const [cpf, setCpf] = useState("");
  const [councilNumber, setCouncilNumber] = useState("");
  const [MenuDrop, setMenuDrop] = useState(false);

  const appointments: {
    [key: string]: string;
  } = {
    professionals: "prof",
    patients: "patients",
    tomorrow: "tomorrow",
    wait: "wait",
  };

  useEffect(() => {
    filterTomorrow();
  }, []);

  const handleSearch = () => {
    filterPatient(cpf);
    filterProfessional(councilNumber);
    filterWaitList(councilNumber);
  };

  const OpenHamburguer = () => {
    setMenuDrop(true);
  };

  const CloseHamburguer = () => {
    setMenuDrop(false);
  };

  return (
    <>
      {!user.isAdm && !user.isProf ? (
        <ContainerAppointments>
          <BoxAppointments>
            {appointmentPatient &&
              appointmentPatient.map((item, index) => (
                <CardAppointments key={index}>
                  <div className="left">
                    <span>Paciente: </span>
                    <span>Data:</span>
                    <span>Horário:</span>
                    <span>Médico(a):</span>
                    <span>Esp:</span>
                    <span>Status:</span>
                  </div>
                  <div className="right">
                    <span>{item?.patient_name}</span>
                    <span>{item?.date.slice(0, 10)}</span>
                    <span>{item.date.slice(11, 16)}</span>
                    <span>{item?.professional.name}</span>
                    <span>{item?.professional.specialty}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                </CardAppointments>
              ))}
          </BoxAppointments>
        </ContainerAppointments>
      ) : (
        <></>
      )}

      {user.isProf ? (
        <ContainerAppointments>
          {MenuDrop ? (
            <FiX className="close" onClick={CloseHamburguer} />
          ) : (
            <FiAlignJustify onClick={OpenHamburguer} />
          )}
          {MenuDrop ? (
            <Menuhamburguer className={MenuDrop ? "menu active" : "menu"}>
              <ul>
                <li>
                  <button
                    onClick={() => setAppointmentsToLoad("professionals")}
                  >
                    <button
                      className="secundary"
                      onClick={() => setMenuDrop(false)}
                    >
                      Minhas consultas
                    </button>
                  </button>
                </li>
                <li>
                  <button onClick={() => setAppointmentsToLoad("wait")}>
                    <button
                      className="secundary"
                      onClick={() => setMenuDrop(false)}
                    >
                      lista de espera
                    </button>
                  </button>
                </li>
              </ul>
            </Menuhamburguer>
          ) : (
            <></>
          )}
          <HeaderProfAdmin>
            <Ul>
              <Li>
                <button onClick={() => setProfAppointment(true)}>
                  Minhas consultas
                </button>
              </Li>
              <Li>
                <button onClick={() => setProfAppointment(false)}>
                  Lista de espera
                </button>
              </Li>
            </Ul>
          </HeaderProfAdmin>
          {profAppointment ? (
            <BoxAppointments>
              {waitList.map((item, index) => (
                <CardAppointments key={index}>
                  <span>CRM:</span>
                  <div className="left">
                    <span>Espera:</span>
                    <span>Consulta:</span>
                    <span>Mensagem:</span>
                  </div>
                  <div className="right">
                    <span>{item.size}</span>
                    <span>{item.appointments}</span>
                    <span>{item.message}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {appointmentProf.map((item, index) => (
                <CardAppointments key={index}>
                  <div className="left">
                    <span>Data:</span>
                    <span>Nome: </span>
                    <span>Idade:</span>
                    <span>Sexo:</span>
                    <span>Plano:</span>
                    <span>Status</span>
                  </div>
                  <div className="right">
                    <span>{item.date}</span>
                    <span>{item.patient.name}</span>
                    <span>{item.patient.age}</span>
                    <span>{item.patient.sex}</span>
                    <span>{item.patient.healt_plan}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                  {/* <button>Finalizar</button> */}
                </CardAppointments>
              ))}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
      {user.isAdm ? (
        <ContainerAppointments>
          {MenuDrop ? (
            <FiX className="close" onClick={CloseHamburguer} />
          ) : (
            <FiAlignJustify onClick={OpenHamburguer} />
          )}
          {MenuDrop ? (
            <Menuhamburguer className={MenuDrop ? "menu active" : "menu"}>
              <ul>
                <li>
                  <button onClick={() => setAppointmentsToLoad("patients")}>
                    <button
                      className="secundary"
                      onClick={() => setMenuDrop(false)}
                    >
                      Consultas paciente
                    </button>
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => setAppointmentsToLoad("professionals")}
                  >
                    <button
                      className="secundary"
                      onClick={() => setMenuDrop(false)}
                    >
                      Consultas médico
                    </button>
                  </button>
                </li>
                <li>
                  <button onClick={() => setAppointmentsToLoad("wait")}>
                    <button
                      className="secundary"
                      onClick={() => setMenuDrop(false)}
                    >
                      lista de espera médico
                    </button>
                  </button>
                </li>
                <li>
                  <button onClick={() => setAppointmentsToLoad("tomorrow")}>
                    <button
                      className="secundary"
                      onClick={() => setMenuDrop(false)}
                    >
                      Consultas de amanhã
                    </button>
                  </button>
                </li>
              </ul>
            </Menuhamburguer>
          ) : (
            <></>
          )}
          <HeaderProfAdmin>
            <Ul>
              <Li>
                <button onClick={() => setAppointmentsToLoad("patients")}>
                  Consultas paciente
                </button>
              </Li>
              <Li>
                <button onClick={() => setAppointmentsToLoad("professionals")}>
                  Consultas médico
                </button>
              </Li>
              <Li>
                <button onClick={() => setAppointmentsToLoad("wait")}>
                  Lista de espera médico
                </button>
              </Li>
              <Li>
                <button onClick={() => setAppointmentsToLoad("tomorrow")}>
                  Consultas de amanhã
                </button>
              </Li>
            </Ul>
          </HeaderProfAdmin>
          {appointments[appointmentsToLoad] === "patients" ? (
            <BoxSearch>
              <input
                type="text"
                placeholder="CPF do paciente"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
              />
              <button onClick={handleSearch}>Pesquisar</button>
            </BoxSearch>
          ) : appointments[appointmentsToLoad] === "prof" ||
            appointments[appointmentsToLoad] === "wait" ? (
            <BoxSearch>
              <input
                type="text"
                placeholder="CRM do Médico"
                value={councilNumber}
                onChange={(e) => setCouncilNumber(e.target.value)}
              />
              <button onClick={handleSearch}>Pesquisar</button>
            </BoxSearch>
          ) : (
            <></>
          )}
          {appointments[appointmentsToLoad] === "wait" ? (
            <BoxAppointments>
              {waitList.map((item, index) => (
                <CardAppointments key={index}>
                  <div className="left">
                    <span>Espera:</span>
                    <span>Consulta:</span>
                    <span>Mensagem:</span>
                  </div>
                  <div className="right">
                    <span>{item.size}</span>
                    <span>{item.appointments}</span>
                    <span>{item.message}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "prof" ? (
            <BoxAppointments>
              {appointmentProf.map((item, index) => (
                <CardAppointments key={index}>
                  <div className="left">
                    <span>Data:</span>
                    <span>Paciente:</span>
                    <span>Médico(a):</span>
                    <span>Status:</span>
                  </div>
                  <div className="right">
                    <span>{item.date}</span>
                    <span>{item.patient.name}</span>
                    <span>{item.professional_name}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : appointments[appointmentsToLoad] === "patients" ? (
            <BoxAppointments>
              {appointmentPatient.map((item, index) => (
                <CardAppointments key={index}>
                  <div className="left">
                    <span>Data:</span>
                    <span>Horário:</span>
                    <span>Paciente:</span>
                    <span>Médico(a):</span>
                    <span>CRM:</span>
                    <span>Status:</span>
                  </div>
                  <div className="right">
                    <span>{item.date.slice(0, 10)}</span>
                    <span>{item.date.slice(11, 16)}</span>
                    <span>{item.patient_name}</span>
                    <span>{item.professional.name}</span>
                    <span>{item.professional.council_number}</span>
                    <span>{item?.finished ? "Finalizada" : "Ativo"}</span>
                  </div>
                </CardAppointments>
              ))}
            </BoxAppointments>
          ) : (
            <BoxAppointments>
              {tomorrow &&
                tomorrow.map((item, index) => (
                  <CardAppointments key={index}>
                    <div className="left">
                      <span>Data:</span>
                      <span>Horário:</span>
                      <span>Paciente:</span>
                      <span>Médico(a):</span>
                    </div>
                    <div className="right">
                      <span>{item.date.slice(0, 10)}</span>
                      <span>{item.date.slice(11, 16)}</span>
                      <span>{item.patient.name}</span>
                      <span>{item.professional.name}</span>
                    </div>
                  </CardAppointments>
                ))}
            </BoxAppointments>
          )}
        </ContainerAppointments>
      ) : (
        <></>
      )}
    </>
  );
};
