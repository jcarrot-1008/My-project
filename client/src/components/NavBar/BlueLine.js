import React from 'react'
import styled from 'styled-components'

const LineBox = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: 200px;
background-color: #E4E2F3;
align-items: center;
justify-content: center;
`

const Text = styled.div`
font-size: 50px;
font-weight: bold;
color: 'white';
`

// const LineBoxWrapper = styled.div`
// display: flex;
// flex-direction: row;
// `

const BlueLine = (props) => {

    const {title, icon} = props
    const Icon = icon

    return icon ? (
            <LineBox>
                <Icon sx={{ fontSize: 50, marginRight: 5 }} color='action' />
                <Text>{title}</Text>
            </LineBox>
    ) : (
            <LineBox>
                <Text>{title}</Text>
            </LineBox>
    )
}

export default BlueLine