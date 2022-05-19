import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../assets/reset.css";
import MainHeader from "./Header";
import MainPage from "./MainPage";



export default function App(){

return(
    <BrowserRouter>
        <MainHeader/>
        <Routes>
            <Route path="/" element={<MainPage />}/>
        </Routes>
    </BrowserRouter>
)
};