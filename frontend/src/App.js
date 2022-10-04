import "./styles.css";
import Whitelist from "./components/Whitelist";
import { ContractProvider } from "./context/ContractContext";

export default function App() {
  return (
    <>
      <ContractProvider>
        <div className="App">
          <Whitelist />
        </div>
      </ContractProvider>
    </>
  );
}
