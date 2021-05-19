import React from 'react';
import styled from 'styled-components';
import { deviceSize } from './Assets/responsive';
import Team1 from './imgs/team1.jpg';

const AboutCenterContainer = styled.div`
    position: relative;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
`;

const AboutCenterContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    background-color: #fff;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media screen and (max-width: ${deviceSize.tablet}px) {
        display: grid;
        grid-template-columns: 1fr;
    }
`;

const AboutCenterInner = styled.div`
    width: 68%;
    padding: 4rem 1rem;
    transition: transform 0.2s ease-in;

    img {
        width: 25%;
        height: 30%;
        margin: .5rem;
    }
    
    @media screen and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
        padding: 2rem 1rem;
        padding-bottom: 0px;
        justify-content: center;
        align-item: center;

        img {
            height: 40%;
            margin: .5rem;
        }
    }
`;

const TopSectionCard = styled.div`
    width: 37%;
    background-color: #cccccc3f;
    margin: 15px;

    @media screen and (max-width: ${deviceSize.tablet}px) {
        width: 100%;
    }
`;

const TopSectionInnerCard = styled.div`
    color: #000639;
    text-align: start;
    margin: 1rem;
    padding: .5rem;
`;

const TopSectionInnerCardHead = styled.h2`
    font-weight: 500;
    font-size: 35px;
    text-transform: uppercase;
    line-height: 1.2;
`;
const TopSectionInnerCardText = styled.p`
    font-size: 16px;
`;

const Line = styled.span`
  width: 10%;
  display: block;
  background-color: #2a9d8f;
  padding: 1px;
`;

function AboutCenter () {
    return(
        <AboutCenterContainer>
            <AboutCenterContent>
                <AboutCenterInner>
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                    <img src={Team1} alt="best in the field" />
                </AboutCenterInner>
                <TopSectionCard>
                    <TopSectionInnerCard>
                        <Line />
                        <TopSectionInnerCardHead>Our Mission</TopSectionInnerCardHead>
                        <TopSectionInnerCardText>Is to let your talent been seen and to make businesses reach out. We are passionate about creating a calm, inspiring work enviroment that attracts amazing talent. We connect that talent with some amazing companies that provide mutual growth opportunities.</TopSectionInnerCardText>
                    </TopSectionInnerCard>
                </TopSectionCard>
            </AboutCenterContent>
        </AboutCenterContainer>
    )
}

export default AboutCenter;