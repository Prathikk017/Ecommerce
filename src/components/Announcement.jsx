import React from 'react'
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
height: 40px;
background-color: #ff6600ee;
color:white;
display:flex;
align-items: center;
justify-content: center;
font-size:16px;
font-style: oblique 25deg;
${mobile({padding: "0px 10px", text:"center"})}
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders above $50 And Get upto $15 OFF with code GET15
    </Container>
  )
}

export default Announcement