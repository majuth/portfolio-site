import React from 'react';
import ReactDom from 'react-dom';
import majuth3 from './majuth3.png';

class Home extends React.Component {
    render() {
      return (
        <div id="homePage">
            <br></br>
            <div class="contentCard mx-auto">
            <h1>Personal Portfolio</h1>
            <br></br>
            <img src={majuth3} alt="majuth"  id="profilePic" class="mx-auto d-block"></img>
            <br></br>
            <h2>Majuth Kira</h2>
            <h3>Toronto Metropolitan Univeristy - Computer Science</h3>
            <h6>majuthkira@gmail.com</h6>
            </div>
            <br></br>
        </div>
      );
    }
  }

export default Home;