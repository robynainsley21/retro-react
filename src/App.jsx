import BasicTabs from "./components/Navbar";
import { DataProvider } from "./components/DataProvider";
import "./assets/css/styles.css";

function App() {
  return (
  <DataProvider>
    <BasicTabs />
  </DataProvider>
);
}

export default App;
