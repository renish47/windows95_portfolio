import { useEffect } from "react";
import Desktop from "./components/Desktop";
import AppState from "./context/AppState";

function App() {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
  }, []);
  return (
    <>
      <AppState>
        <Desktop />
      </AppState>
    </>
  );
}

export default App;
