import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
width: 100%;
height: 100vh;
background-color: white;
color: white;
`

export const PopupBoxObject = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const ShadowedBox = styled.div`
    width: 500px;
    box-shadow: 1px 2px 9px #F4AAB9;
    margin: 4em;
    padding: 1em;
`;

export const Logo = styled.div`
    color: black;
    font-family: 'Rajdhani';
    font-size: 2.4rem;
    letter-spacing: 5px;
    text-decoration: none;
    margin-bottom: 20px;
`;