import { Link } from "react-router-dom"
import styled from "styled-components"

import { body } from "./SessionPage"
export default function SuccessPage(){

    const seats = body.seats;

    return(
        <Container>
            <MainText> Pedido feito com sucesso!</MainText>
            <InformationText>
                <h1> Filme e sessão</h1>
                <h2> {body.movie}</h2>
                <h2> {`${body.day} - ${body.time}`}</h2>
            </InformationText>
            <InformationText>
                <h1>Ingressos</h1>
                {seats.map(item => <h2> Assento {item}</h2>)}
            </InformationText>
            <InformationText>
                <h1>Comprador</h1>
                <h2> {`Nome: ${body.name}`}</h2>
                <h2> {`CPF: ${body.cpf}`}:</h2>
            </InformationText>
            <Link to='/'>
                <Button> Voltar pra Home</Button>
            </Link>
        </Container>
    )
};

const Container = styled.div`
    margin-top: 67px;
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MainText = styled.div`
    width: 100%;
    height: 118px;
    
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.04em;

    color: #247A6B;



`

const InformationText = styled.div`
    width: 100%;
    margin-left: 24px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 30px;

    font-family: 'Roboto', sans-serif;
    font-style: normal;

    h1{
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        letter-spacing: 0.04em;

        color: #293845;
        margin-bottom: 5px;
    }

    h2{
        
        font-weight: 400;
        font-size: 22px;
        line-height: 26px;
        letter-spacing: 0.04em;

        color: #293845;
    }

`


const Button = styled.button`
    width: 225px;
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
    &&:hover{
        cursor: pointer;
    }
`

