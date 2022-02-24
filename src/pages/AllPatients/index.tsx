import { useEffect, useState } from "react";
import { usePatient } from "../../context/Patient";
import { ContainerPatient, PatientList } from "./style";
import { Card } from "../../components/card";
import { UserProps } from "../../context/Patient/types";

export const AllPatients = () => {
  const { allPatient, listAllPatients } = usePatient();
  const [filtered, setFiltered] = useState<UserProps[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    listAllPatients();
    setFiltered(
      allPatient.filter((item) => {
        const regex = new RegExp(search.toUpperCase(), "g");
        return item.name.toUpperCase().match(regex) || item.cpf.match(regex);
      })
    );
  }, [allPatient, search]);

  return (
    <ContainerPatient>
      <input
        type="text"
        placeholder="Nome ou CPF do paciente"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <PatientList>
        {search.length === 0 ? (
          allPatient.map((patient, i) => {
            return <Card key={i} person={patient} />;
          })
        ) : filtered.length === 0 ? (
          <h2>Nenhum paciente encontrado</h2>
        ) : (
          filtered.map((patient, i) => {
            return <Card key={i} person={patient} />;
          })
        )}
      </PatientList>
    </ContainerPatient>
  );
};
