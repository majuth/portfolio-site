import React from 'react';
import ReactDom from 'react-dom';
import majuth from './majuth.jpg';

class Home extends React.Component {
    render() {
      return (
        <div id="homePage">
            <br></br>
            <div class="contentCard mx-auto">
            <h1>Personal Portfolio</h1>
            <br></br>
            <img src={majuth} alt="majuth"  id="profilePic" class="mx-auto d-block"></img>
            <br></br>
            <h2>Majuth Kirakalaprathapan</h2>
            <h3>Ryerson Univeristy - Computer Science</h3>
            <h6>mkirakalaprathapan@ryerson.ca</h6>
            </div>
            <br></br>
        </div>
      );
    }
  }

export default Home;