import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

export let body ={};

export default function SessionPage(){

    const idSession = useParams().idSessao;

    const [session, setSession] = useState([]);
    const [day, setDay] = useState([]);
    const [time, setTime] = useState("");
    const [movie, setMovie] = useState([]);
    const [seats, setSeats] = useState([]);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [document, setDocument] = useState("");
    const navigate = useNavigate();
    
   
    function GetData(response){
        setSession(response.data);
        setDay(response.data.day);
        setTime(response.data.name);
        setMovie(response.data.movie);
        setSeats(response.data.seats);
    }

    function ReserveSeats(){
        const ids = selectedSeats.map(iten => iten.number);
        const data = {ids: ids, name: name, cpf: document};
        console.log(data);

        body ={ movie: movie.title,
            day: day.weekday,
            time: time,
            seats: ids,
            name: name,
            cpf: document
        }

        console.log(body);
        const promise = axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', data);
        promise.then(()=> navigate("/sucesso"), { replace: true } );
    }

    
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        
        promise.then(GetData);
    }, [])
    
    return(
        <Container>
            <Text> {"Selecione o(s) assento(s)"} </Text>
            <Seats>
                {seats.map((iten, index) => <SeatPlaces key ={index}  id ={iten.id} number= {iten.name} isAvailable={iten.isAvailable} selectedSeats={selectedSeats} setSelectedSeats={setSelectedSeats}/>)}
            </Seats>
            <Options>
                <Selected> <div></div> <span> Selecionado </span></Selected>
                <Available><div></div> <span> Disponível </span></Available>
                <Unavailable><div></div> <span> Indisponível </span></Unavailable>
            </Options>
            <Data>
                <label> Nome do comprador:</label>
                <input type="text" placeholder="Digite seu nome..." onChange={(e) => setName(e.target.value)} value={name} required></input>
                <label> CPF do comprador:</label>
                <input placeholder="Digite seu CPF..." onChange={(e) => setDocument(e.target.value)} value={document} required ></input>
            </Data>
            <Button onClick={ReserveSeats}> Reservar assentos</Button>
            <Footer>
                <img src={movie.posterURL}/>
                <span> 
                    <h1> {movie.title} </h1>
                    <h1>{`${day.weekday} - ${session.name}`}</h1>
                </span>
            </Footer>
        </Container>
    );
};

function SeatPlaces({id, number, isAvailable, selectedSeats, setSelectedSeats}){

    const [selected, setSelected] = useState(false);
    
    function select(isAvailable, id, name){
        if(!isAvailable){
            alert("Esse assento não está disponível")
        }
        else if(selected){
            setSelected(!selected);
            setSelectedSeats(selectedSeats.filter((seatId) => seatId.id !== id))
            
        }
        else{
            setSelectedSeats([...selectedSeats, {id, number}])
            setSelected(!selected);
            
        }
    }
    

    return(
        <>
            {isAvailable ? (<SeatAvailable key={id} isAvailable={isAvailable} onClick={() => select(isAvailable, id, number)} selected={selected}> {number} </SeatAvailable>) : 
            (<SeatUnavailable key={id} isAvailable={isAvailable} onClick={() => select(isAvailable, id, number)} > {number} </SeatUnavailable>) }
        </>
    )
}


const Container = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Text = styled.div`
    width: 100%;
    height: 118px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #293845;
    background-color: white;

`
const Seats = styled.div`
    width: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const SeatAvailable = styled.div`
    box-sizing: border-box;

    width: 26px;
    height: 26px;
    margin: 9px 3.5px;

    background-color: ${props => props.selected ? '#8DD7CF' : '#C3CFD9'};
    border: 1px solid ${props => props.selected ? '#1AAE9E' : '#7B8B99'};
    border-radius: 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #000000;

    &&:hover{
        cursor:pointer
    }
`
const SeatUnavailable = styled.div`
    box-sizing: border-box;

    width: 26px;
    height: 26px;
    margin: 9px 3.5px;

    background-color: #FBE192;
    border: 1px solid #F7C52B;
    border-radius: 12px;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.04em;

    color: #000000;

    &&:hover{
        cursor:pointer
    }
` 

const Options = styled.div`
    width: 85%;
    display:flex;
    justify-content: space-evenly;
`

const Selected = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
            box-sizing: border-box;

            width: 25px;
            height: 25px;
            margin: 9px 3.5px;

            background-color: #8DD7CF;
            border: 1px solid #1AAE9E;
            border-radius: 17px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.04em;

            color: #000000;
        }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }
`
const Available = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
            box-sizing: border-box;

            width: 24px;
            height: 24px;
            margin: 9px 3.5px;

            background-color: #C3CFD9;
            border: 1px solid #7B8B99;
            border-radius: 17px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.04em;

            color: #000000;
        }
    
    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }
`
const Unavailable = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    div{
            box-sizing: border-box;

            width: 24px;
            height: 24px;
            margin: 9px 3.5px;

            background-color: #FBE192;
            border: 1px solid #F7C52B;
            border-radius: 17px;

            font-family: 'Roboto';
            font-style: normal;
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
            display: flex;
            align-items: center;
            justify-content: center;
            letter-spacing: 0.04em;

            color: #000000;
        }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;

        color: #4E5A65;
    }
`

const Data = styled.div`
    width: 87%;
    margin: 40px 0 57px 0;
    display: flex;
    flex-direction: column;

    label{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 21px;
        display: flex;
        align-items: center;

        color: #293845;
    }

    input{
        height: 51px;
        margin: 2px 0 7px 0;

        background-color: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        ::placeholder{
            font-family: 'Roboto';
            font-style: italic;
            font-weight: 400;
            font-size: 18px;
            line-height: 21px;

            color: #AFAFAF;
        }
    }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    margin-bottom: 189px;

    background-color: #E8833A;
    border-radius: 3px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;

    color: #FFFFFF;

    &&:hover{
        cursor: pointer;
    }
`

const Footer = styled.div`
    width: 100%;
    height: 117px;
    padding-left: 10px;
    display: flex;
    align-items: center;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    position:fixed;
    bottom:0;
    left:0;

    img{
        width: 64px;
        height: 89px;
        padding: 8px;
        box-sizing: border-box;
        
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
    }

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 30px;

        color: #293845;

        margin-left: 14px;
    }
`