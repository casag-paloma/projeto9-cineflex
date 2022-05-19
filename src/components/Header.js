import styled from "styled-components"

export default function MainHeader(){
return(
    <Header> CINEFLEX </Header>
)
};

const Header = styled.div`
    background-color: #C3CFD9;
    width: 100%;
    height: 67px;
    position: absolute;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    text-align: center;

    color: #E8833A;

`