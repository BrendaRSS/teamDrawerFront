import styled from "styled-components";
import { device } from "../constants/DeviceSize";
import { GiSoccerBall } from "react-icons/gi";
import jogadores from "../assets/images/player.jpeg"

export default function HomePage(){
    return(
        <ContainerHome>
            <Content>
                <Title>
                    <span>Sorteie seus times!</span>
                    <GiSoccerBall />
                </Title>
                <ButtonPageSorteio>Iniciar</ButtonPageSorteio>
            </Content>
            <Image>
                <ImagePlayer src={jogadores} alt="jogadores" />
            </Image>
        </ContainerHome>
    )
}

const ContainerHome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #15b287;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    @media ${device.mobileM}{
        
    }
`
const Content = styled.div`
    width: 50%;
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center ;
`
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 150px;
 span{
        font-family: 'Fredericka the Great', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 17px;
        text-align: center;
        text-decoration-line: underline;
        color: #FFFFFF;
        display: block;
        padding-right: 10px;
    }
    svg{
            font-size:65px;
            color: #FFFFFF;
    }
`
const Image = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 100%;
`
const ImagePlayer = styled.img`
    width: 500px;
    border-radius: 50%;
`
const ButtonPageSorteio = styled.button`
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-weight: 500;
    font-size: 25px;
    padding: 0.7em 1.4em 0.7em 1.1em;
    color: white;
    background: #ad5389;
    background: linear-gradient(0deg, rgba(20,167,62,1) 0%, rgba(102,247,113,1) 100%);
    border: none;
    box-shadow: 0 0.7em 1.5em -0.5em #14a73e98;
    letter-spacing: 0.05em;
    border-radius: 20em;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
`