import React, { Component } from "react";
import styled from "styled-components";
import Header from "./header";

const Wrapper = styled.div`
  .header--centered {
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

`;

class home extends Component {
  render() {
    return (
      <Wrapper>
        <p>&nbsp; </p>
          
        <iframe className="iframeV"
        title="video about me"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/UwsrzCVZAb8"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Header />
      </Wrapper>
    );
  }
}

export default home;
