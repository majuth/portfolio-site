import React from 'react';
import ReactDom from 'react-dom';
import Home from './home.js';
import AboutMe from './aboutMe.js';
import PersonalProjects from './personalProjects.js';
import SchoolProjects from './schoolProjects.js';

class MainPage extends React.Component{
    render(){
        return(
        <div>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark" id="wholeNavBar">
                <a onClick={this.triggerHomePage}>
                <p class="navbar-toggler navBarAddPadding" id="nameNavBar">Majuth Kirakalaprathapan</p>
                </a>
  
                <button class="navbar-toggler navBarAddPadding" id="toggleButton" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav" id="ulPart">
                        <div class="navbarButtons">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={this.triggerHomePage} data-toggle="collapse" data-target=".navbar-collapse.show">Home</a>
                        </li>
                        </div>
                        <div class="navbarButtons">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={this.triggerAboutMePage} data-toggle="collapse" data-target=".navbar-collapse.show">About Me</a>
                        </li>
                        </div>
                        <div class="navbarButtons">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={this.triggerPersonalProjectsPage} data-toggle="collapse" data-target=".navbar-collapse.show">Personal Projects</a>
                        </li>
                        </div>
                        <div class="navbarButtons">
                        <li class="nav-item">
                            <a class="nav-link" href="#" onClick={this.triggerSchoolProjectsPage} data-toggle="collapse" data-target=".navbar-collapse.show">School Projects</a>
                        </li>
                        </div>
                    </ul>
                </div>
            </nav>

            <div id="pageContent">
                {this.state.homePageState && <Home />}
                {this.state.aboutMePageState && <AboutMe />}
                {this.state.personalProjectsPageState && <PersonalProjects />}
                {this.state.schoolProjectsPageState && <SchoolProjects />}
            </div>

            <div id="footer">
                <a class="logoMargin" href="https://linkedin.com/in/majuth"><img src="https://pluspng.com/img-png/linkedin-icon-png--1600.png" alt="linkedin" class="logos"></img></a>
                <a class="logoMargin" href="https://github.com/majuth"><img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github" class="logos"></img></a>
                <p id="copyright">© Majuth Kirakalaprathapan</p>
            </div>
        </div>
        );
    }

    constructor(props) {
        super(props)
        this.state = { homePageState: true }
    }
    
    triggerHomePage = () => {
        this.setState({
          ...this.state,
          homePageState: true,
          aboutMePageState: false,
          personalProjectsPageState: false,
          schoolProjectsPageState: false
        })
    }

    triggerAboutMePage = () => {
        this.setState({
          ...this.state,
          homePageState: false,
          aboutMePageState: true,
          personalProjectsPageState: false,
          schoolProjectsPageState: false
        })
    }

    triggerPersonalProjectsPage = () => {
        this.setState({
          ...this.state,
          homePageState: false,
          aboutMePageState: false,
          personalProjectsPageState: true,
          schoolProjectsPageState: false
        })
    }

    triggerSchoolProjectsPage = () => {
        this.setState({
          ...this.state,
          homePageState: false,
          aboutMePageState: false,
          personalProjectsPageState: false,
          schoolProjectsPageState: true
        })
    }
}

export default MainPage;