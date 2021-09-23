import React from "react";
import styled from "styled-components";
import mobPic from "../images/mobSters.png";

export default function conclusion() {
    return (
        <PageContainer>
        <img src={mobPic}/>
        <div className="logo">
            <h1>Thank you!</h1>
        </div>
    </PageContainer>
    );
}

const PageContainer = styled.div`
    height: 100vh;
    width: 100vw;
    position: relative;

    .logo {
        right: 0;
        bottom: 0;
        position: absolute;
        color: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        align-items: center;
        h1{
            font-size: 12vw;
            margin: 5rem;
        }
    }
    img {
        height: 100vh;
        width: 100vw;
        z-index: 1;
        position: absolute;
    } 
`;