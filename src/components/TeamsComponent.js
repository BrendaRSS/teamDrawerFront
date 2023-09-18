import styled from "styled-components";
import { device } from "../constants/DeviceSize";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { BallTriangle } from "react-loader-spinner";

export default function TeamsComponent(){
    const [namePlayer, setNamePlayer] = useState("");
    const [teams, setTeams] = useState();
    const [printDatas, setPrintDatas] = useState(false);

    function createPlayer(event) {
        event.preventDefault();
        const body = { nome: namePlayer }
        axios.post("https://teamdrawerapi-production.up.railway.app/jogador", body)
            .then((response) => {
                console.log(response.data);
                setNamePlayer("");
                // getTeams();
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

    function getTeams() {
        axios.get("https://teamdrawerapi-production.up.railway.app/times")
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
    function deleteTeams() {
        axios.delete("https://teamdrawerapi-production.up.railway.app/jogador/all")
            .then((response) => {
                setPrintDatas(false);
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
            })
    }
    return(
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
                    {printDatas === true ?
                        <TeamsBuildingInside>
                            {Object.keys(teams).map((time, index) => (
                                 <Ateam key={index}>
                                    <strong>{time}:&nbsp;</strong>
                                        {teams[time].map((jogador, jogadorIndex) => (
                                            <span key={jogadorIndex}>{jogador},&nbsp; </span>
                                        ))}
                                </Ateam>
                            ))}
                        </TeamsBuildingInside>
                        :
                        <Spiner>
                    <BallTriangle
                        height={100}
                        width={100}
                        radius={5}
                        color="#15b287"
                        ariaLabel="ball-triangle-loading"
                        wrapperClass={{}}
                        wrapperStyle=""
                        visible={true}
                    />
                    </Spiner>}
                <ContainerButton>
                    <ButtonTeams
                        color="#31b44c"
                        onClick={getTeams}>
                        Formar Times
                    </ButtonTeams>
                    <ButtonTeams
                        color="#7e0000"
                        onClick={deleteTeams}>
                        Deletar Times
                    </ButtonTeams>
                </ContainerButton>
            </TeamsBuild>
        </Content>
    );
}

const Content = styled.div`
    width: 85%;
    height: 450px;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-radius: 40px;
    box-shadow: 0px -1px 39px -4px rgba(0,0,0,0.62);
    box-sizing: border-box;
    padding: 15px;
`
const ContainerInput = styled.div`
    width: 400px ;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 10px;
    input{
    width: 300px;
    height: 40px;
    left: 25px;
    top: 233px;
    background: #FFFFFF;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
    box-sizing: border-box;
    padding: 5px 15px;
    margin-right: 15px;
    margin-left: 15px;
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
    background-color: #d1a4f0;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    color: #FFFFFF;
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
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`
const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top:20px;
`
const ButtonTeams = styled.button`
    width: 150px;
    height: 35px;
    background-color: ${(props) => props.color};;
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 23px;
    border-radius: 8px;
    border-style: none;
    box-sizing: border-box;
    margin-left:10px;
    margin-right: 10px;
    color: #FFFFFF;
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
const TeamsBuildingInside = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 5px;
`
const Ateam = styled.div`
    width: 90%;
    display: flex;
    background-color: #FFFFFF;
    justify-content:flex-start ;
    align-items: center;
    border: 1px dashed #15b287;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 13px 15px 13px -5px rgba(0,0,0,0.2);
    padding: 2px;
    margin-bottom: 5px;
    strong{
        color: #000000;
        text-align: center;
        font-size: 20;
        font-family: 'Roboto', sans-serif;
    }
    span{
        color: #000000;
        text-align: center;
        font-size: 18;
        font-family: 'Josefin Slab', serif;
    }
`
const Spiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 20px;
`
