import "./App.css";
import { Route, Routes } from "react-router-dom";
import MainRouter from "./Routers/MainRouter";
import NotFoundPage from "./Pages/NotFoundPage/NotFoundPage";
function App() {
  return (
    <>
      <MainRouter />
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
