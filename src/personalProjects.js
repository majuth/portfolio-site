import React from 'react';
import ReactDom from 'react-dom';
import portfolioSite from './portfolioSite.png';

class PersonalProjects extends React.Component {
    render() {
      return (
        <div>
            <br></br>
            <div id="accordion" style={{maxWidth: "80vw", margin: "auto"}}>
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingOne">
                  <h5 class="mb-0">
                    <button class="btn btn-link" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      Personal Portfolio Webpage
                    </button>
                  </h5>
                </div>

                <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="card-body">
                    <span style={{fontWeight: "600"}}> Uses:</span> React, Bootstrap, HTML, CSS, and Javascript
                    <br></br>
                    <span style={{fontWeight: "600"}}>Description:</span> Mobile friendly portfolio web page to demonstrate some of my skills and to provide an easier way to look at my work and past experiences. It's the site you currently on :)
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
              <div class="card contentCard projectContainer" style={{borderRadius: "0", backgroundColor: "#66757f", maxWidth: "80vw", padding: "0"}}>
                <div class="card-header" id="headingTwo">
                  <h5 class="mb-0">
                    <button class="btn btn-link collapsed" style={{color: "white", fontWeight: "600"}} data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      More personal projects coming
                    </button>
                  </h5>
                </div>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="card-body">
                    Check back for more projects currently in the works
                  </div>
                </div>
              </div>
            </div>
            <br></br>
        </div>
      );
    }
  }

export default PersonalProjects;