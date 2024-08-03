import React from "react";
import { IonPage } from "@ionic/react";
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Page = styled(IonPage)`
    width: 100%;
    height: 100%;
    background-color: #669DFB;
`

export default function Welcome() {
    return (
        <Page>
            <img src={logo} />
        </Page>
    )
}