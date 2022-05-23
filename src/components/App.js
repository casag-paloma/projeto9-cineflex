import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../assets/reset.css";
import MainHeader from "./Header";
import MainPage from "./MainPage";
import MoviePage from "./MoviePage";
import SessionPage from "./SessionPage";
import SuccessPage from "./SuccessPage";



export default function App(){
    const [movie, setMovie] = useState('');
    const [day, setDay] = useState('');
    const [time, setTime] = useState('');
    const [seats, setSeats] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCpf] =useState('');

return(
    <BrowserRouter>
        <MainHeader/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/sessoes/:idFilme" element={<MoviePage />}/>
            <Route path="/assentos/:idSessao" element={<SessionPage />}/>
            <Route path="/sucesso" element={<SuccessPage movie={movie} day={day} time={time} seats={seats} name={name} cpf={cpf}/>} />

        </Routes>
    </BrowserRouter>
)
};