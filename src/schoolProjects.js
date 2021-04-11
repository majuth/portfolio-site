import React from 'react';
import ReactDom from 'react-dom';
import nikeMarketplace from './nikeMarketplace.png';
import javascriptGamestore from './javascriptGamestore.png';
import htmlCheckers from './htmlCheckers.png';
import mrPotatoHeadGame from './MrPotatoHeadgame.png';
import javaTextBasedGame from './textBasedJavagame.png';
import slackBot from './slackBot.png';

class SchoolProjects extends React.Component {
    render() {
      return (
        <div>
            <br></br>
            <div id="accordion" style={{maxWidth: "80vw", margin: "auto"}}>
            <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                      Slack Bot
                    </button>
                  </h5>
                </div>

                <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> Python, Flask, Rest APIs
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> This is a simple slack bot that can repeat questions and tell the weather.
                    <br></br>
                    <br></br>
                    <img src={slackBot} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/CPS847-group42/slackbot-group42"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Nike Marketplace Webpage
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> HTML, CSS, and Javascript
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> This is a Marketplace made in HTML and CSS with a bit of javascript. I do not own any of the Images and Media, all media is property of Nike and other companies.
                    <br></br>
                    <br></br>
                    <img src={nikeMarketplace} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/NikeMarketplaceHTML"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseOne">
                      Javascript Game Store
                    </button>
                  </h5>
                </div>

                <div id="collapseTwo" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> Javascrip, HTML, and CSS
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> Game Store made in Javascript, HTMl and CSS. All media is not my property.
                    <br></br>
                    <br></br>
                    <img src={javascriptGamestore} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/JavascriptGameStore"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseThree" aria-expanded="true" aria-controls="collapseOne">
                      HTML Checkers
                    </button>
                  </h5>
                </div>

                <div id="collapseThree" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> HTML, and Javascript
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> Checkers built from scratch in html.
                    <br></br>
                    <br></br>
                    <img src={htmlCheckers} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/HtmlCheckers"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseOne">
                    Mr Potato Head Game Webpage
                    </button>
                  </h5>
                </div>

                <div id="collapseFour" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> HTML, CSS, Javascript, and JQuery
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> Mr.PotatoHead game in HTML, CSS, Javascript, and JQuery. Media is not my property.
                    <br></br>
                    <br></br>
                    <img src={mrPotatoHeadGame} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/MrPotatoHeadHTML"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseOne">
                      Text Based Java Game
                    </button>
                  </h5>
                </div>

                <div id="collapseFive" class="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> Java
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> This is a text based java game, where the player fights an alien outbreak.
                    <br></br>
                    <br></br>
                    <img src={javaTextBasedGame} class="mx-auto d-block" style={{width: "100%"}}></img>
                    <br></br>
                    <div style={{backgroundColor: "#343a40", width: "156px", margin: "auto"}}>
                    <a class="githubLink" href="https://github.com/majuthkira/TextBasedJavaGame"><div class="githubButton">View on Github <img src="https://image.flaticon.com/icons/svg/25/25231.svg" alt="github" style={{width:"19px", paddingLeft: "4px"}}></img></div></a>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            <br></br>
        </div>
      );
    }
  }

export default SchoolProjects;