import React from 'react';
import styled from 'styled-components';
// import EksiNousLogo from "../../../imgs/new.png";
import { Link } from "react-router-dom";
import { deviceSize } from "./Assets/responsive";
import { useMediaQuery } from "react-responsive";
import { Button } from './Assets/Button';

import LogoImg from '../../imgs/footer_logo.png';  

const NavbarContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  
  // justify-content: space-between;
  // position: fixed;
  // position: relative;

  background-color: ${({ useTransparent }) =>
    useTransparent ? "transparent" : "#264653"};
`;

const AccessibilityContainer = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 20px;
`;

const AnchorLink = styled(Link)`
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  margin: 0 15px;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;

const BrandLogoContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 0 0 50px!important;
`;

const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "2em")};
  height: ${({ size }) => (size ? size + "px" : "2em")};
  // padding-left: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const LogoTitle = styled.h2`
  font-size: ${({ size }) => (size ? size + "px" : "20px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 900;
  margin-left: 26px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function AboutUs(props) {
  const { logoSize, textSize, color, useTransparent } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.tablet });
  return (
    <NavbarContainer useTransparent={useTransparent}>
      <BrandLogoContainer>
        <LogoImage size={logoSize}>
          <img src={LogoImg} alt="Eksi-nous logo" />
        </LogoImage>
        <LogoTitle color={color} size={textSize}>Eksi-Nous</LogoTitle>
      </BrandLogoContainer>
      <AccessibilityContainer>
        {!isMobile && <AnchorLink to='/'>Home</AnchorLink>}
        {!isMobile && <AnchorLink to='/signUp'>Sign Up</AnchorLink>}
        {!isMobile && <AnchorLink to='/login'>Sign In</AnchorLink>}
        <Link>
        {!isMobile && <Button size={11}>Contact Us</Button>}
        </Link>
      </AccessibilityContainer>
    </NavbarContainer>
  )
}

export default AboutUs
