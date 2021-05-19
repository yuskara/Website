import React from "react";
import styled from "styled-components";
import { deviceSize } from "./Assets/responsive";

const HeadContainer = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  display: flex;
  flex-wrap: wrap;
`;

const HeadContent = styled.div`
  padding: 3vh 6vw;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    margin-right: 2rem;
    margin-left: 1rem;
  }
`;

const HeadRow = styled.div`
  width: 75%;
  text-align: start;
  padding: 4rem 1rem 1rem;
  color: #000639;
  background-color: #cccccc3f;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 100%;
  }
`;

const HeadHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  letter-spacing: .05px;
  line-height: 110%;
  margin-bottom: 45px;
`;

const HeadingSpan = styled.span`
  color: #2a9d8f;
`;

const HeadText = styled.p`
  font-size: 1.3rem;
  line-height: 32px;
  margin-bottom: 25px;
`;

const Line = styled.span`
  width: 7%;
  display: block;
  background-color: #2a9d8f;
  padding: 1px;
`;

function AboutHead () {
  return(
    <HeadContainer>
      <HeadContent>
        <HeadRow>
          <Line />
          <HeadHeading>Hello! from <HeadingSpan>Eksi</HeadingSpan>-Nous.</HeadHeading>
          <HeadText>We work with individual, companies & founders to build scalable, results-driven software teams in Greece. Focus on your business while we focus on making the world reach out to you and building your team.</HeadText>
        </HeadRow>
      </HeadContent>
    </HeadContainer>
  )
}

export default AboutHead;
