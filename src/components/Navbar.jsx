import React from 'react';
import styled from 'styled-components';
import {Search} from '@mui/icons-material';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import { Badge } from '@mui/material';
import {mobile} from "../responsive";

const Container = styled.div`
  height: 50px;
  ${mobile({height: "50px"})}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
  flex: 1;
  display:flex;
  align-items: center;
`;

const Lanuage = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({display: "none"})}
`
const SearchContainer = styled.div`
border: 0.5px solid lightgray;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
${mobile({marginLeft:"6px"})}


`
const Input = styled.input`
border: none;
${mobile({width: "50px"})}

`
const Center = styled.div`
  flex: 1;
  text-align: center;
  justify-content: center;
  display: flex;
`;
const Logo = styled.h1`
font-weight: bold;
font-family: italic;
text-shadow: 0 0 4px #ff7300, 0 0 3px #0000FF;
${mobile({fontSie: "20px", marginLeft:"6px", paddingLeft:"4px"})}
`
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({flex:2, justifyContent: "center"})}
`;
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left:25px;
  ${mobile({fontSize: "12px", marginLeft: "10px"})}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lanuage>EN</Lanuage>
          <SearchContainer>
            <Input placeholder='Search'/> 
            <Search style={{color:"gray", fontSize:16}}/>
          </SearchContainer>
        </Left>
         <Center>{/*<span><img src="https://img.favpng.com/1/16/21/shopping-cart-computer-icons-symbol-png-favpng-niBgzRb1n41tdmtC4CXMTqnNq.jpg" alt="logo" style={{width:"40px",height:"35px",marginRight:"0px",borderRadius:"100%"}}/></span>*/}
        <Logo>Shopcart</Logo></Center> 
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>SignIn</MenuItem>
          <MenuItem>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartCheckoutOutlinedIcon color="action" />
          </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
