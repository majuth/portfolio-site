import React from 'react';
import ReactDom from 'react-dom';
import majuth2 from './majuth2.JPG';

class AboutMe extends React.Component {
    render() {
      return (
        <div class="aboutMe container-fluid">
            <br></br>
            <div class="row aboutMeRow">
                <div class="col-md-1">
                </div>
                <div class="col-md-4" style={{marginTop: "0"}}>
                  <div class="contentCard aboutMeContentCard">
                  <h4 style={{textAlign: "center"}}>Majuth Kirakalaprathapan</h4>
                  <br></br>
                  <img src={majuth2} class="mx-auto d-block" style={{width: "250px"}}></img>
                  <br></br>
                  <div class="mx-auto d-block" style={{maxWidth: "300px"}}>
                    <p>Email: mkirakalaprathapan@ryerson.ca</p>
                    <p>Age: {this.calculate_age()}</p>
                    <p>From: Vaughan, Ontario</p>
                  </div>
                  </div>
                  <br></br>
                  <div class="contentCard aboutMeContentCard">
                  <h4 style={{textAlign: "center"}}>Skills</h4>
                  <div class="mx-auto d-block" style={{maxWidth: "300px"}}>
                    <p><b>Languages</b> Java, Python, Unix/Shell, HTML, Javascript, CSS, C, C++, Perl, PHP, Ruby, MySQL, XML, Smalltalk, Elixir, Haskell, and Rust</p>
                    <p><b>Operating Systems </b> Windows (XP, Vista, 7, 8, 10), Ubuntu, Android, iOS</p>
                    <p><b>Applications </b> MS Office Suite, Photoshop, VS Code, Eclipse</p>
                  </div>
                  </div>
                </div>
                
                <div class="col-md-1">
                  <br></br>
                </div>
                <div class="col-md-5">
                <div class="contentCard aboutMeContentCard">
                    <h4 style={{textAlign: "center"}}>Education</h4>
                    <div class="mx-auto d-block" style={{maxWidth: "400px"}}>
                      <p><b>Bachelor of Science, Computer Science (Co-op) </b>
                      <br></br>Ryerson University | Sep. 2018 to June 2023
                      <br></br>Toronto, ON
                      <ul>
                        <li>	CGPA: 3.64 </li>
                        <li>	Awarded Deans list for first year </li>
                      </ul></p>
                    </div>
                  </div>
                  <br></br>
                  <div class="contentCard aboutMeContentCard">
                    <h4 style={{textAlign: "center"}}>Professional Experience</h4>
                    <div class="mx-auto d-block" style={{maxWidth: "400px"}}>
                      <p><b>Ryerson Computing and Communication Services: G-Suite Support Assistant     </b>
                      <br></br>June 2020 to Aug. 2020
                      <br></br>Toronto, ON
                      <ul>
                        <li>	Create Google Suite API scripts to add additional functionality to existing Google Suite Applications  </li>
                        <li>	Collaborate on creation of Google Suite based workflows to best utilize cloud computing  </li>
                      </ul></p>

                      <br></br>
                      <p><b>McDonald's: Crew Member      </b>
                      <br></br>May 2016 to Aug. 2019 
                      <br></br>Vaughan, ON
                      <ul>
                        <li>	Performed up to 50 transactions hourly under high time constraints, while also demonstrating great attention to detail  </li>
                        <li>	Operated computer equipment to collect orders in a timely manner and provide excellent service  </li>
                      </ul></p>

                      <br></br>

                      <p><b>Highschool Co-op Student (City of Vaughan – OCIO Department)</b>
                      <br></br>Sept. 2016 to Jan. 2017
                      <br></br>Vaughan, ON
                      <ul>
                        <li>	Assist client support workers with setting up workstations, phone systems and mobile devices  </li>
                        <li>	Create client-targeted documents to effectively serve around 1000 clients  </li>
                        <li>  Organize various hardware using spreadsheets and product codes to be easily accessible</li>
                      </ul></p>
                    </div>
                  </div>
                  <br></br>
                  <div class="contentCard aboutMeContentCard">
                    <h4 style={{textAlign: "center"}}>Volunteer & Community Involvement</h4>
                    <div class="mx-auto d-block" style={{maxWidth: "400px"}}>
                      <p><b>Ryerson Computer Science Course Union (CSCU): </b>
                      <br></br><b>3rd Year Rep | May 2020 to Present</b>
                      <br></br>2nd Year Deputy | May 2019 to April 2020
                      <br></br>Toronto, ON
                      <ul>
                        <li>	Enthusiastically assist in preparation and conduction of CSCU events  </li>
                        <li>	Communicate with members to find solutions to problems faced by Ryerson’s 2nd year Computer Science students  </li>
                      </ul></p>

                      <br></br>

                      <p><b>International Languages Program Volunteer</b>
                      <br></br>Oct. 2011 to Jun. 2018
                      <br></br>Vaughan, ON
                      <ul>
                        <li>	Assertively monitored outside activities with minimal supervision and instruction   </li>
                        <li>	Create client-targeted documents to effectively serve around 1000 clients•	Effectively performed administrative duties in the office consisting of spreadsheets, event planning and tracking assets  </li>
                        <li>  Received “Certificate of Appreciation” for efficiently assisting the program for over 3 years</li>
                      </ul></p>
                    </div>
                  </div>
                </div>
                <div class="col-md-1">
                </div>
            </div>
            <br></br>
        </div>
      );
    }

  calculate_age() { 
    var diff_ms = Date.now() - (new Date(2000, 12, 16)).getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }
}
  
export default AboutMe;