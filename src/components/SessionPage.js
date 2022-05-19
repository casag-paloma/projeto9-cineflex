import { useParams } from "react-router-dom";

export default function SessionPage(){
    const idFilm = useParams();

    console.log(idFilm);
}