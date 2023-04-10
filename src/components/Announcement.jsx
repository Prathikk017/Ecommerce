import React from 'react'
import styled from "styled-components";

const Container = styled.div`
height: 40px;
background-color: black;
color:white;
display:flex;
align-items: center;
justify-content: center;
font-size:16px;

font-style: oblique 25deg;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Orders above $50 And Get upto $15 OFF with code GET15
    </Container>
  )
}

export default Announcement