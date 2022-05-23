import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";

export default function SessionPage(){

    const idSession = useParams().idSessao;

    const [session, setSession] = useState([]);
    const [movie, setMovie] = useState([]);
    const [seats, setSeats] = useState([]);
    let isAvailable = true  ;
  

    function GetData(response){
        setSession(response.data);
        setMovie(response.data.movie);
        setSeats(response.data.seats);
    }
    
    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);
        
        promise.then(GetData);
    }, [])
    
    console.log(session, seats);
    return(
        <Container>
            <Text> {"Selecione o(s) assento(s)"} </Text>
            <Seats>
                {seats.map(iten => <Seat key={iten.id} isAvailable={iten.isAvailable} >{iten.name}</Seat> )}
            </Seats>
            <Options>
                <Selected> <div></div> <span> Selecionado </span></Selected>
                <Available><div></div> <span> Disponível </span></Available>
                <Unavailable><div></div> <span> Indisponível </span></Unavailable>
            </Options>
            <Data></Data>
            <Footer>
                <img src={movie.posterURL}/>
                <span>{movie.title}</span>
            </Footer>
        </Container>
    );
};


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
    background-color: ${props => props.cor};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Seat = styled.div`
    box-sizing: border-box;

    width: 26px;
    height: 26px;
    margin: 9px 3.5px;

    background-color: ${props => props.isAvailable ? '#C3CFD9' : '#FBE192'};
    border: 1px solid ${props => props.isAvailable ? '#7B8B99' : '#F7C52B'};
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

const Data = styled.div``

const Buttons = styled.div`
    display:flex;
    margin-top: 22px;
`

const Button = styled.button`
    width: 83px;
    height: 43px;
    margin-right: 8px;

    background: #E8833A;
    border-radius: 3px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.02em;

    color: #FFFFFF;
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