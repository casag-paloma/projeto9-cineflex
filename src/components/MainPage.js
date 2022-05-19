import styled from "styled-components"

export default function MainPage(){
    return(
        <Container>
            <Text> Selecione o filme </Text>
            <Films>
                <Film> filme 1</Film>
                <Film> filme 1</Film>
                <Film> filme 1</Film>
                <Film> filme 1</Film>

            </Films>
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

const Films = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content: space-around;
`

const Film = styled.div`
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
`