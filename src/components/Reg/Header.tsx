import React from "react";
import { IonHeader, IonText } from "@ionic/react";
import styled from "styled-components";
import WorkHandsSymbol from "./Header/WorkHandsSymbol";

const Header = styled(IonHeader)`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Text = styled(IonText)`
    font-size: 35px;
`

export default function RegHeader() {
    return (
        <Header>
            <Text>Регистрация</Text>
            <WorkHandsSymbol/>
        </Header>
    )
}