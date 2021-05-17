import React from "react";
import styled from "styled-components";
import { Button } from './Assets/Button';
import { deviceSize } from "./Assets/responsive";

import InGreece from "./imgs/greece.png";

const TopSectionContent = styled.div`
  width: 100%;
  height: 550px;
  // background-color: #26465375;
  background-color: #364e5852;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    height: 100%;
  }
`;

const TopSectionInnerContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 2rem 0;
  justify-content: space-evenly;

  @media screen and (max-width: ${deviceSize.laptop}px) {
    padding: .5rem;
    width: 98%;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    display: grid;
  }
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
  text-align: start;
  width: 50%;
  margin: 0;
  padding: 2rem 1rem 1rem;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 70%;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 90%;
  }
  `;

const SloganWhoWeAre = styled.h3`
  font-size: 35px;
  color: #000639;
  text-transform: uppercase;
  font-weight: 500;
  line-height: 1.4;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 24px;
  }
`;

const SloganText = styled.p`
  font-size: 19px;
  color: #fff!important;
  line-height: 1.5;
  margin: 0;
  margin-bottom: 1.2rem;
  color: #000639!important;
`;

const StandoutImage = styled.div`
  width: 24em;
  height: 30em;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 30%;
  }

  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 90%;
    margin: 2rem;
    margin-left: 1rem;
  }
`;

const Line = styled.span`
  width: 10%;
  display: block;
  background-color: #2a9d8f;
  padding: 1px;
`;

function AboutCenterTop(props) {
  const { children } = props;
  return (
      <TopSectionContent>
        {children}
        <TopSectionInnerContainer>
          <InnerContainer>
            <Line />
            <SloganWhoWeAre>Who we're</SloganWhoWeAre>
            <SloganText>Here we came from different continents, from Europe, Asia, Africa and South America to form start-up team with the six (6) brilliant minded called <em>Eksi-Nous</em> base in Greece. We are passionate about creating a calm, inspiring work enviroment that attracts amazing job seekers, individual, and businesses.</SloganText>
            <Button>Contact Us Today</Button>
          </InnerContainer>
            <StandoutImage >
              <img src={InGreece} alt="best in the field" />
            </StandoutImage>
        </TopSectionInnerContainer>
      </TopSectionContent>
  );
}

export default AboutCenterTop;