import React from 'react';
import ReactDom from 'react-dom';
import majuth4 from './majuth4.png';

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
                  <img src={majuth4} class="mx-auto d-block" style={{width: "250px"}}></img>
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
                    <p><b>Languages</b> Java, Python, Unix/Shell, HTML, Javascript, CSS, C, C++, Git, SQL, Perl, PHP, Ruby, JSON, XML, Smalltalk, Elixir, Haskell, and Rust</p>
                    <p><b>Frameworks</b> React, Angular, Bootstrap</p>
                    <p><b>Operating Systems </b> Windows (XP, Vista, 7, 8, 10), Ubuntu, Android, iOS</p>
                    <p><b>Applications </b> MS Office Suite, Google Suite, Photoshop, VS Code, Eclipse, Git Bash, Jupyter Notebook, Putty</p>
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
                        <li>	CGPA: 3.70 </li>
                        <li>	Awarded Deans list for first and second year </li>
                      </ul></p>
                    </div>
                  </div>
                  <br></br>
                  <div class="contentCard aboutMeContentCard">
                    <h4 style={{textAlign: "center"}}>Professional Experience</h4>
                    <div class="mx-auto d-block" style={{maxWidth: "400px"}}>
                      <p><b>Ontario Ministry of Government and Consumer Services: Systems Officer</b>
                      <br></br>Sep. 2020 to Dec. 2020
                      <br></br>Toronto, ON
                      <ul>
                        <li>	Consolidated various forms of data in 50+ spreadsheets for coversion into advanced statistics in Microsoft Power Bi  </li>
                        <li>  Maintained Powershell scripts to generate reports from databases  </li>
                        <li>  Collaborated in daily standup meetings as part of an agile work flow  </li>
                      </ul></p>

                      <br></br>


                      <p><b>Ryerson Computing and Communication Services: G-Suite Support Assistant     </b>
                      <br></br>June 2020 to Aug. 2020
                      <br></br>Toronto, ON
                      <ul>
                        <li>	Created Javascript based Google Suite API scripts to add additional functionality to existing Google Suite Applications  </li>
                        <li>	Collaborated on creation of Google Suite based workflows to best utilize cloud computing  </li>
                        <li>  Developed dozens of Web Pages for Ryerson’s Google Suite support pages using Adobe AEM  </li>
                        <li>  Demonstrated basic project management skills to effectively delive results within deadlines  </li>
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

                      <p><b>Highschool IT Co-op Student (City of Vaughan – OCIO Department)</b>
                      <br></br>Sept. 2016 to Jan. 2017
                      <br></br>Vaughan, ON
                      <ul>
                        <li>	Assist client support workers with setting up workstations, phone systems and mobile devices  </li>
                        <li>	Create client-targeted documents to effectively serve 1000+ clients  </li>
                        <li>  Organize various hardware using spreadsheets and product codes to be easily accessible</li>
                      </ul></p>
                    </div>
                  </div>
                  <br></br>
                  <div class="contentCard aboutMeContentCard">
                    <h4 style={{textAlign: "center"}}>Student Leadership & Campus Involvement</h4>
                    <div class="mx-auto d-block" style={{maxWidth: "400px"}}>

                      <p><b>Ryerson Computer Science Course Union (CSCU): </b>
                      <br></br><b>4th Year Rep | May 2021 to Present</b>
                      <br></br>Toronto, ON
                      <ul>
                        <li>  Represent 4th year Computer Science students by curating events and bringing forth changes based on student input  </li>
                        <li>  Participate in the creation of online social and edcational events for students </li>
                      </ul>
                      <br></br>3rd Year Rep | May 2020 to April 2021
                      <br></br>Toronto, ON
                      <ul>
                        <li>  Communicate with 3rd year Computer Science students to bring forth changes they wish to see </li>
                        <li>  Assist in the creation of online educational events for students </li>
                      </ul>
                      <br></br>2nd Year Deputy | May 2019 to April 2020
                      <br></br>Toronto, ON
                      <ul>
                        <li>	Enthusiastically assist in preparation and conduction of CSCU events  </li>
                        <li>	Communicate with members to find solutions to problems faced by Ryerson’s 2nd year Computer Science students  </li>
                      </ul></p>

                      <br></br>

                      <p><b>Ryerson Developer Student Club: Finance Executive</b>
                      <br></br>April 2020 to April 2021
                      <br></br>Toronto, ON
                      <ul>
                        <li>	Prepare financial plans for supporting the club’s financial needs   </li>
                        <li>  Assist in the planning of learning opportunities for student developers   </li>
                      </ul></p>

                    </div>
                  </div>
                  <br></br>
                  <div class="contentCard aboutMeContentCard">
                    <h4 style={{textAlign: "center"}}>Volunteer & Community Involvement</h4>
                    <div class="mx-auto d-block" style={{maxWidth: "400px"}}>
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