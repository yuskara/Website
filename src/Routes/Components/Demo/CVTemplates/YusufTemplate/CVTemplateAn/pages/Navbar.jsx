import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import NavButton from "../common/NavButton";

const Wrapper = styled.div`
  .navButtons {
    display: flex;
    justify-content: space-between;
    font-size: 1.4rem;
    margin-bottom:4px;  
  }
  .btnHome{
    margin-top:-4px;
    color: #54ff00;
    cursor: pointer;
    padding: .1rem 1.5rem;
    font-size: 1.4rem;
  }
`;

class NavBar extends Component {
  navHome = () => {
    const { history } = this.props;
    history.push("/templateY3/");
  };
  navAbout = () => {
    const { history } = this.props;
    history.push("/templateY3/about");
  };

  navExperience = () => {
    const { history } = this.props;
    history.push("templateY3/experience");
  };

  navContact = () => {
    const { history } = this.props;
    history.push("/templateY3/contact");
  };

  render() {
    return (
      <Wrapper>
        <div className="navButtons">
          <ul className="btnHome" onClick={this.navHome} >HOME</ul>
          <NavButton onClick={this.navAbout}>About</NavButton>
          <NavButton onClick={this.navExperience}>Experience</NavButton>
          <NavButton onClick={this.navContact}>Contact</NavButton>
        </div>
      </Wrapper>
    );
  }
}

export default withRouter(NavBar);
