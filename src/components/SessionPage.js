import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export default function SessionPage(){
    const idMovie = useParams().idFilme;

    const [movie, setMovie] = useState([])
    const [showtimes, setShowtimes] = useState([]);

    function GetMovie(response){
        setMovie(response.data)
        setShowtimes(response.data.days);

    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        promise.then(GetMovie);
    }, []);


    return(
        <Container>
            <Text> Selecione o horário </Text>
            <Showtimes>

                {showtimes.map(item => <ShowtimeFunction key={item.id} weekday={item.weekday} date={item.date} showtimes={item.showtimes}/>)}

            </Showtimes>
            <Footer>
                <img src={movie.posterURL}/>
                <span>{movie.title}</span>
            </Footer>
        </Container>
    )
}

function ShowtimeFunction({weekday, date, showtimes}){
    return(
        <Showtime>
            <span> {weekday} - {date}</span>
            <Buttons>
                {showtimes.map(item => <Button key={item.id}> {item.name} </Button> )}
            </Buttons>
        </Showtime>
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

const Showtimes = styled.div`
    width: 100%;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

const Showtime = styled.div`
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;

    color: #293845;

    margin-bottom: 23px;
    display:flex;
    flex-direction:column;

    span{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        letter-spacing: 0.02em;

        color: #293845;
    }

`

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