import "./styles.scss";

export default function Home() {

  var divStyles = 'block';

  if(String(window.location).split('/')[3] === ''){
    divStyles = 'block';
  }else{
    divStyles = 'none';
  }

  return (
    <div style={{display: divStyles}}>
      <h1 className="containerTitle">Stack</h1>
      <div className="container">
        
      <div className="frame"><div className="frameFlex"> <img className="frameLogoReact" src="https://pluralsight2.imgix.net/paths/images/javascript-542e10ea6e.png" alt="appLogo"/> 
        <h2>JavaScript</h2> </div>
        <h4>Typescript makes your code easier to read and debug, for clean code and comfortable usability.<code></code></h4>
        </div>
        
        <div className="frame"><div className="frameFlex"> <img className="frameLogoReact" src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" alt="appLogo"/> 
        <h2>React JS</h2> </div>
        <h4>React is an open-source front-end JavaScript library for building user interfaces or UI components.</h4>
        </div>

        <div className="frame"><div className="frameFlex"> <img className="frameLogoSass" src="https://clipart.info/images/ccovers/1499794873sass-logo.png" alt="appLogo"/> 
        <h2>Sass SCSS</h2> </div>
        <h4>Sass is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets.</h4>
        </div>

        <div className="frame"><div className="frameFlex"> <img className="frameLogoFire" src="https://firebase.google.com/downloads/brand-guidelines/PNG/logo-vertical.png" alt="appLogo"/> 
        <h2>Firebase</h2> </div>
        <h4>Firebase is a database application made by Google made for data storage and authentication.</h4>
        </div>

        
        <div className="frame"><div className="frameFlex"> <img className="frameLogoVercel" src="https://pbs.twimg.com/profile_images/1252531684353998848/6R0-p1Vf_400x400.jpg" alt="appLogo"/> 
        <h2>Vercel</h2> </div>
        <h4>Vercel is a deployment and collaboration platform for frontend developers. It enables developers to host websites that deploy instantly.</h4></div>

        <div className="frame"><div className="frameFlex"> <img className="frameLogoReact" src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/188/thumb/npmlogo.png" alt="appLogo"/> 
        <h2>npm</h2> </div>
        <h4>npm is the package manager for the node js platform. Handles Api's/Dependencies.</h4></div>
      </div>
    </div>
  );
}
