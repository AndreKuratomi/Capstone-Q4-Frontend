import GlobalStyle from "./styles/global";
import MainRoutes from "./routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div>
      <GlobalStyle />
      <MainRoutes />
      <Toaster />
    </div>
  );
}

export default App;
