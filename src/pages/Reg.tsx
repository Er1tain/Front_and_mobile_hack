import React from "react";
import { IonButton, IonContent, IonPage } from "@ionic/react";
import RegHeader from "../components/Reg/Header";
import styled from "styled-components";

const Page = styled(IonPage)`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
`

const Input = styled.input`
    font-size: 25px;
    width: max-content;
    align-self: center;
`
const Button = styled.button`
    width: 100%;
    background-color: #2957A8;
    color: white;
    font-size: 35px;
    border-radius: 8px;
    border: 0;
`
const AuthButton = styled.button`
    color: red;
    border: 0;
    background-color: rgba(0, 0, 0, 0);
    font-size: 22px;
    margin-top: 1rem;
`

export default function Reg() {
    return (
        <Page>
            {/* <RegHeader/> */}
            <h1>Регистрация</h1>
            <Form>
                    <Input placeholder="Фамилия"/>
                    <Input placeholder="Имя"/>
                    <Input placeholder="Отчество"/>
                    <Input placeholder="Почта" />
                    <Input placeholder="Пароль" type="password"/>
                    <Input placeholder="Повтор пароля" type="password"/>
                    <Button>Зарегестрироваться</Button>
            </Form>
            <AuthButton>Уже есть аккаунт?</AuthButton>
        </Page>
    )
}