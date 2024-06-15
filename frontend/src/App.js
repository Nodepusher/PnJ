import "./App.css";
import MainRouter from "./Routers/MainRouter";
import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <>
      <MainRouter />
    </>
  );
}

export default App;
