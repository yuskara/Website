import React from 'react'
import styled from 'styled-components'
import { deviceSize } from './Assets/responsive';

import Background from './imgs/background.jpg'
import Video6Nous from './imgs/w-d.mp4'

const ACBottomSection = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${Background}) no-repeat;
    background-position: 0px -150px;
    background-attachment: scroll;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: ${deviceSize.tablet}px) {
        height: 100vh;
    }
`;

const ACBottomContainer = styled.div`
    width: 100%;
    padding: 3rem 0;
    padding-bottom: 6rem;
    align-item: center;
`;

const ACBottomColumn = styled.div`
    display: flex;
    // flex-wrap: wrap;
    width: 100%;
    justify-content: space-around;
    padding-bottom: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    @media screen and (max-width: ${deviceSize.mobile}px) {
        display: grid;
        height: 100px;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    color: #fff;
    align-items: flex-start;
    justify-content: center!important;
    margin: 0 4em;

    @media screen and (max-width: ${deviceSize.tablet}px) {
        margin: 0px;
    }
    @media screen and (max-width: ${deviceSize.mobile}px) {
        padding-bottom: 2rem;
    }

    &:not(:last-of-type) {
        margin-right: 3%;
    }
`;

const FLink = styled.a`
  font-size: 17px;
  text-align: start;
  align-item: flex-start;
  font-weight: 400;
  text-decoration: none;

  &:not(:last-of-type) {
    margin-bottom: 1.5em;
  }

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-left: 1rem;

    &:not(:last-of-type) {
        margin-bottom: .7em;
    }
  }
`;

const ACBottomHeading = styled.div`
    text-align: center;
    align-item: center;
    padding: 1rem;
`;

const ACBottomTitle = styled.h2`
    color: #fff;
    font-size: 35px
    line-height: 1.4
    font-wight: 500;
    text-transform: uppercase;
`;

function AboutCenterBottom() {
    return (
        <div>
            <ACBottomSection>
                <ACBottomContainer>
                    <ACBottomHeading>
                        <ACBottomTitle>Our Value</ACBottomTitle>
                    </ACBottomHeading>
                    <ACBottomColumn>
                        <ContentContainer>
                            <FLink>Always creative</FLink>
                            <FLink>Stay young</FLink>
                            <FLink>Be proactive</FLink>
                        </ContentContainer>
                        <ContentContainer>
                            <FLink>Innovate in every way</FLink>
                            <FLink>Commited to your team</FLink>
                            <FLink>Always your best</FLink>
                        </ContentContainer>
                        <ContentContainer>
                            <FLink>Never stop learning</FLink>
                            <FLink>Communicate</FLink>
                            <FLink>Live smarter, not harder</FLink>
                        </ContentContainer>
                    </ACBottomColumn>
                </ACBottomContainer>
            </ACBottomSection>
            {/* <Video /> */}
            {/* HERE WE HAVE A SHORT VIDEO ABOUT EKSI-NOUS TEAM IF NESSECCARY is been comment out*/}
        </div>
    )
}

function Video(){
    return(
        <VideoContainer>
            <VideoContent>
                <VideoTitle>
                    <VideoTitleH3>SHORT VIDEO ABOUT US</VideoTitleH3>
                </VideoTitle>
                <VideoIframe>
                    <iframe src={Video6Nous}
                        frameBorder="0" 
                        allowFullScreen
                        autoPlay muted
                    ></iframe>
                </VideoIframe>
            </VideoContent>
        </VideoContainer>
    )
    
} 

const VideoContainer = styled.div`
    display: flex;
    flex-directioin: column;
    width: 100%;
    position: relative;
    justify-content: center;

`;
const VideoContent = styled.div`
    display: grid;
    padding: 3vh 6vw;
`;
const VideoTitle = styled.div`
    padding: 1.5em 0;
    font-weight: bold;
    background-color: #2a9d8f;
`;
const VideoTitleH3 = styled.h3`
    margin: 0;
    font-size: 2em;
    color: white;
    text-align: center;
`;
const VideoIframe = styled.div`
    width: 80%;

    iframe {
        width: 600px;
        height: 335px;
    }
`;


export default AboutCenterBottom;