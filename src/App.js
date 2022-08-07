import React from 'react';
import { ReactComponent as IconTwitter } from './assets/icons/twitter.svg';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
           <p>&lt;ProjectFocal /&gt;</p>
          </div>
          <div className="social">
            <a href="https://twitter.com/projectfocalCA" title="Twitter" target="_blank" rel="noopener noreferrer">
              <IconTwitter className="icon" />
            </a>
            <a href="https://github.com/ProjectFocal" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Get ready for Project Focal.</h1>
            <p>Website coming soon. Shoot us an email if you're curious.</p>
            <p>Or even follow our 100% open-source development on our GitHub</p>
          </div>
          <div class="horiontal-button-group">
            <a href="mailto:team@projectfocal.ca">
              <div className="cta">Send us an email</div>
            </a>
            <a href="https://github.com/ProjectFocal">
              <div className="cta"> Visit our GitHub</div>
            </a>
          </div>
        </div>
        <div className="footer">
          <span>
            Made with ❤️ in Montreal QC 📍by <a className="underlined" href="https://github.com/domilx" target="_blank" rel="noopener noreferrer">domi</a> and <a className="underlined" href="https://github.com/trulyNathan2" target="_blank" rel="noopener noreferrer">Nathan</a> using <a className="underlined" href="https://reactjs.org/" title="ReactJS" target="_blank" rel="noopener noreferrer">React</a></span>
        </div>
      </div>
    );
  }
}

export default App;