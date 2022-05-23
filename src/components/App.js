import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/reset.css";
import MainHeader from "./Header";
import MainPage from "./MainPage";
import MoviePage from "./MoviePage";
import SessionPage from "./SessionPage";



export default function App(){

return(
    <BrowserRouter>
        <MainHeader/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
            <Route path="/sessoes/:idFilme" element={<MoviePage />}/>
            <Route path="/assentos/:idSessao" element={<SessionPage />}/>

        </Routes>
    </BrowserRouter>
)
};