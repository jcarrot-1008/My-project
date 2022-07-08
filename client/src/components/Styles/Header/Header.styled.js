import React from 'react';
import styled from 'styled-components'

export const Header = styled.div`
width: 100%;
height: 80vh;
position: relative;
display: flex;
justify-content: center;
align-items: center;
&::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
    max-width: 100;
    min-height: 40px;
    border-radius: 0 0 50% 50% / 0 0 100% 100%;
    transition: scaleX(1.5);
    background-position: right top;
    background-size: 100vw 200px;
    background-color: #282c34;
}
`

export const MainHeader = styled.div`
position: relative;
z-index: 1;
margin: 0 auto;
max-width: 500px;
background-color: transparent;
`