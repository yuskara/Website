import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { deviceSize } from './Assets/responsive';
import EksiNousLogo from '../../imgs/logo_NoFrame.svg';

const AboutNav = styled.nav`
  display: flex;
  position: sticky;
  height: 80px;
  // align-items: center;
  justify-content: center;
  top: 0;
  background: #264653;
  margin-top: -80px;
  z-index: 10;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    transition: 0.8s all ease;
  }
`;

const AboutNavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 80px;
  justify-content: space-between;
  padding: 0 24px;
  max-width: 1100px;
  z-index: 1;
`;

const AboutNavLogo = styled(Link)`
    display: flex;
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    justify-self: flex-start;
    align-items: center;
    cursor: pointer;
    text-decoration: none;
    margin-left: 24px;

    img {
        width: 50px;
        height: 50px;
        border-radius 20%;
    }
`;

const AboutMobileIcon = styled.div`
  display: none;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    display: block;
    font-size: 1.8rem;
    color: #fff;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    transition: translate(-100%, 60%);
    cursor: pointer;
  }
`;

const AboutFaBarsToggle = styled(FaBars)`
  color: #fff;
  cursor: pointer;
`;

const AboutNavMenu = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  list-style: none;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    display: none;
  }
`;

const AboutNavItem = styled.div`
  display: flex;
`;

// const AboutNavLinks = styled(Link)`
const AboutNavLinks = styled.a`
  color: #fff;
  font-size: 1rem;
  text-decoration: none;
  height: 100%;
  margin: 0 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &.active {
    border-bottom: 3px solid #2a9d8f;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    color: #2a9d8f;
    border-bottom: 3px solid #fff;
    padding-bottom: 2px;
  }
`;

const AboutNavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    display: none;
  }
`;

// const AboutBtnLink =styled(Link)`
const AboutBtnLink = styled.a`
    font-size: 1rem;
    color: #fff;
    font-weight: 500;
    background: #2a9d8f;;
    white-space: nowrap;
    text-decoration: none;
    padding: 7px 14px;
    border-radius: 20px;
    border: none;
    outline: none;
    transition: all 0.2s ease-in-out;
    color: #333;
    background: #fff;
    font-weight: 500;
  }
`;

function AboutMenu({ aboutToggle }) {
  return (
    <>
      <AboutNav>
        <AboutNavContainer>
          <AboutNavLogo to=''>
            {/* Eksi-Nous */}
            <img src={EksiNousLogo} />
          </AboutNavLogo>
          <AboutMobileIcon onClick={aboutToggle}>
            <AboutFaBarsToggle />
          </AboutMobileIcon>
          <AboutNavMenu>
            <AboutNavItem>
              {/* <AboutNavLinks to='/'>Home</AboutNavLinks> */}
              <AboutNavLinks href='/'>Home</AboutNavLinks>
            </AboutNavItem>
            <AboutNavItem>
              {/* <AboutNavLinks to='/templates'>Templates</AboutNavLinks> */}
              <AboutNavLinks href='/templates'>CV_Templates</AboutNavLinks>
            </AboutNavItem>
            <AboutNavItem>
              {/* <AboutNavLinks to='/signUp'>Sign Up</AboutNavLinks> */}
              <AboutNavLinks href='/signUp'>Sign Up</AboutNavLinks>
            </AboutNavItem>
            <AboutNavItem>
              {/* <AboutNavLinks to='/login'>Sign In</AboutNavLinks> */}
              <AboutNavLinks href='/login'>Sign In</AboutNavLinks>
            </AboutNavItem>
            <AboutNavBtn>
              {/* <AboutBtnLink to='/contactUs'>Contact Us</AboutBtnLink> */}
              <AboutBtnLink href='mailto:sdsd@sdsdsdsd.com'>
                Contact Us
              </AboutBtnLink>
            </AboutNavBtn>
          </AboutNavMenu>
        </AboutNavContainer>
      </AboutNav>
    </>
  );
}

export default AboutMenu;
