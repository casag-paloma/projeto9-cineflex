import { useState, useEffect } from "react";
import styled from "styled-components"
import axios from "axios";
import { Link } from "react-router-dom";

export default function MainPage(){

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        promise.then(response => setMovies(response.data));
    }, []);

    
    return(
        <Container>
            <Text> Selecione o filme </Text>
            <Movies>
                {movies.map(movie => 
                <Link to={`/sessoes/${movie.id}`} >
                    <Movie key={movie.id}> 
                        <img src={movie.posterURL} alt=""/>
                    </Movie> 
                </Link>)}
            </Movies>
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

`

const Movies = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
`

const Movie = styled.div`
    width: 145px;
    height: 209px;
    margin-bottom: 7px; 

    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;

    display:flex;
    justify-content: center;
    align-items: center;

    img{
        width: 129px;
        height: 193px;
    }

    && :hover{
        cursor: pointer;
    }
`