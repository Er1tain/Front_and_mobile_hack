import React from "react";
import { IonPage } from "@ionic/react";
import styled from 'styled-components';
import logo from '../assets/images/logo.png';

const Page = styled(IonPage)`
    width: 100%;
    height: 100%;
    background-color: #669DFB;
    display: flex;
    justify-content: center;
    align-items: center;
`
const Image = styled.img`
    pointer-events: none;
    width: 20rem;
`

export default function Welcome() {
    return (
        <Page>
            <Image src={logo} />
        </Page>
    )
}