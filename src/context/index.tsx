import { AppointmentsProvider } from "./Appointments";
import { AuthProvider } from "./Auth";
import { AuthProviderProps } from "./Auth/types";
import { PatientProvider } from "./Patient";
import { ProfessionalProvider } from "./Professional";
import { StatesProvider } from "./States";

export const Providers = ({ children }: AuthProviderProps) => {
  return (
    <>
      <AuthProvider>
        <ProfessionalProvider>
          <PatientProvider>
            <AppointmentsProvider>
              <StatesProvider>{children}</StatesProvider>
            </AppointmentsProvider>
          </PatientProvider>
        </ProfessionalProvider>
      </AuthProvider>
    </>
  );
};
