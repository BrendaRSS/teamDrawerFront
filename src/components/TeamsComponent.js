import styled from "styled-components";
import { device } from "../constants/DeviceSize";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import { Content, ContainerInput, InputNamePlayer, ButtonSendPlayer, TeamsBuild, ContainerButton, ButtonTeams,
    TeamsBuildingInside, Ateam, Spiner } from "../pages/StyleHomePage";

export default function TeamsComponent(){
    const [namePlayer, setNamePlayer] = useState("");
    const [teams, setTeams] = useState();
    const [printDatas, setPrintDatas] = useState(false);

    function createPlayer(event) {
        event.preventDefault();
        const nameUpperCase = namePlayer.split(" ");
        if (nameUpperCase.length === 1) {
            return alert("Por favor, preencha o NOME e SOBRENOME do jogador");
        }
        const capitalizedWords = nameUpperCase.map(word => {
                return word.charAt(0).toUpperCase() + word.slice(1);
        });
        const nameBody = capitalizedWords.join(' ');

        const body = { nome: nameBody }
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
                    <InputNamePlayer
                        onChange={e => setNamePlayer(e.target.value)}
                        value={namePlayer}
                        type="player"
                        placeholder="Nome e sobrenome do jogador"
                        required
                    />
                    <ButtonSendPlayer type="submit">Enviar</ButtonSendPlayer>
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
                        <Rings
                            height="150"
                            width="150"
                            color="#4fa94d"
                            radius="6"
                            wrapperStyle={{}}
                            wrapperClass=""
                            visible={true}
                            ariaLabel="rings-loading"
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