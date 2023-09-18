import styled from "styled-components";

export const Content = styled.div`
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
export const ContainerInput = styled.div`
    width: 400px ;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 20px;
    margin-top: 10px;
`
export const InputNamePlayer = styled.input`
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
        &&::placeholder{
        font-family: 'Raleway', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 23px;
        color: #000000;
    }
`
export const ButtonSendPlayer = styled.button`
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
    text-align: center;
    appearance: none;
    backface-visibility: hidden;
    box-shadow: rgba(39, 174, 96, .15) 0 4px 9px;
    cursor: pointer;
    display: inline-block;
    letter-spacing: normal;
    outline: none;
    overflow: hidden;
    flex-shrink: 0;
    padding: 0 1.6rem;
    text-decoration: none;
    transform: translate3d(0, 0, 0);
    transition: all .3s;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: top;
    white-space: nowrap;
    &&:hover {
        background-color: #9d5fc7;
        opacity: 1;
        transform: translateY(0);
        transition-duration: .35s;
      }

    &&:active {
    transform: translateY(2px);
    transition-duration: .35s;
    }
`
export const TeamsBuild = styled.div`
    width: 100%;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 10px;
`
export const ContainerButton = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top:20px;
`
export const ButtonTeams = styled.button`
    width: 150px;
    height: 35px;
    background-color: ${(props) => props.color};
    font-family: 'Raleway';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
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
        background-color: #FFFFFF;
        border: 1px solid ${(props) => props.color};
        color: #000000;
        font-size: 14px;
        transition-duration: 1s;
    }
`
export const TeamsBuildingInside = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 5px;
`
export const Ateam = styled.div`
    width: 90%;
    display: flex;
    background-color: #FFFFFF;
    justify-content:flex-start ;
    align-items: center;
    border: 1px solid #15b287;
    border-radius: 2px;
    box-sizing: border-box;
    box-shadow: 13px 15px 13px -5px rgba(0,0,0,0.2);
    padding: 8px;
    margin-bottom: 5px;
    strong{
        color: #4c4e4d;
        text-align: center;
        font-size: 20;
        font-family: 'Roboto', sans-serif;
    }
    span{
        color: #000000;
        text-align: center;
        font-size: 18;
        font-family: 'Roboto', sans-serif;
    }
`
export const Spiner = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 20px;
`
