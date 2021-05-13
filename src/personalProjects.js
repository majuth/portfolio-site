import React from 'react';
import ReactDom from 'react-dom';
import portfolioSite from './portfolioSite.png';
import basketballStatsSite from './basketballStatsSite.png';
import imageRepository from './imageRepository.png';
import ruprint from'./ruprint.png';

class PersonalProjects extends React.Component {
    render() {
      return (
        <div>
            <br></br>
            <div id="accordion" style={{maxWidth: "80vw", margin: "auto"}}>
            <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingZero">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseZero" aria-expanded="true" aria-controls="collapseZero">
                      Basketball Stats Site
                    </button>
                  </h5>
                </div>

                <div id="collapseZero" class="collapse show" aria-labelledby="headingZero" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> Angular, HTML, Javascript, CSS, REST APIs, and Bootstrap
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> Basketball Stats Site is a demo stats site that shows up to date NBA player and team statistics in an easy to use format. 
                    <br></br>
                    <br></br>
                    <img src={basketballStatsSite} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/basketball-stats-site"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                      Image Repository
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> React and Firebase
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> An image repository that can have images added and stored on a server
                    <br></br>
                    <br></br>
                    <img src={imageRepository} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/image-repository"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOnePointFive">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseOnePointFive" aria-expanded="false" aria-controls="collapseOnePointFive">
                      Course Selection Site
                    </button>
                  </h5>
                </div>

                <div id="collapseOnePointFive" class="collapse" aria-labelledby="headingOnePointFive" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> React, Firebase, Bootstrap, HTML, CSS, and Javascript
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> A course selection prototype site for Ryerson Computer Science Students. Created as a submission for Ryerson's hackathon, RUHacks 2021!
                    <br></br>
                    <br></br>
                    <img src={ruprint} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/Ctrl-Alt-Defeat-RUHacks/RUPrint"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      Personal Portfolio Webpage
                    </button>
                  </h5>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> React, Bootstrap, HTML, CSS, and Javascript
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> Mobile friendly portfolio web page to demonstrate some of my skills and to provide an easier way to look at my work and past experiences. It's the site you're currently on :)
                    <br></br>
                    <br></br>
                    <img src={portfolioSite} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/portfolio-site"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
            <br></br>
            </div>
        </div>
      );
    }
  }

export default PersonalProjects;