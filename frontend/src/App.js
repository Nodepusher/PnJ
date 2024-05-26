import './App.css';
import { Route, Routes } from 'react-router-dom';
import MainRouter from './Routers/MainRouter';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
function App() {
    return (
        <>
            <MainRouter />
        </>
    );
}

export default App;
