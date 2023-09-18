import styled from "styled-components";
import { device } from "../constants/DeviceSize";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function HomePage() {
    const [namePlayer, setNamePlayer] = useState("");
    const [teams, setTeams ] = useState();
    const [printDatas, setPrintDatas] = useState(false);

    function createPlayer(event){
        event.preventDefault();
        const body = { nome: namePlayer }
        axios.post("http://localhost:8080/jogador", body)
            .then((response) => {
                console.log(response.data);
                setNamePlayer("");
                getTeams();
            })
            .catch((error) => {
                console.log(error.response.data);
                const status = error.response.status;
                if (status === 422) {
                    alert("Todos os campos precisam ser preenchidos adequadamente!");
                }
                if (status === 401) {
                    alert("Token não enviado ou usuário não encontrado!");
                }
                if (status === 404) {
                    alert("Página não encontrada.");
                }
                if (status === 500) {
                    alert("Erro no servidor");
                }
            });
    }

    function getTeams(){
        axios.get("http://localhost:8080/times")
        .then((response) => {
            setTeams(response.data);
            setPrintDatas(true);
        })
        .catch((error) => {
            console.log(error.response.data);
            const status = error.response.status;
            if (status === 422) {
                alert("Todos os campos precisam ser preenchidos adequadamente!");
            }
            if (status === 401) {
                alert("Token não enviado ou usuário não encontrado!");
            }
            if (status === 404) {
                alert("Página não encontrada.");
            }
            if (status === 500) {
                alert("Erro no servidor");
            }
        });
    }
    function deleteTeams(){
        axios.delete("http://localhost:8080/jogador/all")
        .then((response) => {
            setPrintDatas(false);
        })
        .catch((error)=>{
            console.log(error.response.data);
            const status = error.response.status;
            if (status === 422) {
                alert("Todos os campos precisam ser preenchidos adequadamente!");
            }
            if (status === 401) {
                alert("Token não enviado ou usuário não encontrado!");
            }
            if (status === 404) {
                alert("Página não encontrada.");
            }
            if (status === 500) {
                alert("Erro no servidor");
            }
        })
    }

    return (
        <ContainerHome>
            <Welcome>
                <span>Seja Bem Vindo!</span>
            </Welcome>
            <Content>
                <form onSubmit={createPlayer}>
                    <ContainerInput>
                        <input
                            onChange={e => setNamePlayer(e.target.value)}
                            value={namePlayer}
                            type="player"
                            placeholder="Digite o nome e sobrenome do jogador"
                            required
                        />
                        <button type="submit">Enviar</button>
                    </ContainerInput>
                </form>
                <TeamsBuild>
                    {printDatas === true? 
                        <ul>
                            {Object.keys(teams).map((time, index) => (
                                <li key={index}>
                                    <strong>{time}:</strong>
                                    <ul>
                                        {teams[time].map((jogador, jogadorIndex) => (
                                            <li key={jogadorIndex}>{jogador}</li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul> 
                        :
                        ""}
                    <ButtonTeams
                        onClick={getTeams}>
                            Formar Times
                    </ButtonTeams>
                    <ButtonTeams
                        onClick={getTeams}>
                        Deletar Times
                    </ButtonTeams>
                </TeamsBuild>
            </Content>
        </ContainerHome>
    );
}


const ContainerHome = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #15b287;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    @media ${device.mobileM}{
        
    }
`
const Welcome = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 60px;
 span{
        font-family: 'Fredericka the Great', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 60px;
        line-height: 17px;
        text-align: center;
        color: #FFFFFF;
        display: block;
        padding-right: 10px;
    }
`
const Content = styled.div`
    width: 80%;
    height: 400px;
    background: linear-gradient(0deg, rgb(81 88 83 / 88%) 0%, rgb(0 0 0 / 74%) 100%);
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 40px;
    padding: 15px;
`
const ContainerInput = styled.div`
    width: 400px ;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    input{
    width: 326px;
    height: 58px;
    left: 25px;
    top: 233px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    padding: 5px 15px;
    margin-top: 13px;
        ::placeholder{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #000000;
    }
}
 button{
    width: 100px;
    height: 35px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    margin-top: 20px;
    color: #000000;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 1.6rem;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
            &&:hover {
        box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
        transition-duration: .5s;
    }
}
`    
const TeamsBuild = styled.div`
    width: 400px;
    height: auto;
    background-color: purple;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const ButtonTeams = styled.button`
    width: 150px;
    height: 35px;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    margin-top: 20px;
    color: red;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0 1.6rem;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
            &&:hover {
        box-shadow: rgba(80, 63, 205, 0.5) 0 1px 30px;
        transition-duration: .5s;
    }
`