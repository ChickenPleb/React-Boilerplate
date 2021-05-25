import "./styles.scss";

export default function Header() {

  var navOpacity = [1, 1, 1];

  if(String(window.location).split('/')[3] === ''){
      navOpacity[0] = 0.7; 
  }else if(String(window.location).split('/')[3] === 'about'){
    navOpacity[1] = 0.7; 
  }else if(String(window.location).split('/')[3] === 'contact'){
    navOpacity[2] = 0.7; 
  }

  return (
    <div className="header">
      <img className="appLogo" src="https://miro.medium.com/max/500/1*cPh7ujRIfcHAy4kW2ADGOw.png" alt="appLogo"/>
      <div className="appTitle">React Boilerplate</div>
      <div className="flexNav">
        <a href="/" style={{opacity: navOpacity[0]}} id="navButton">Home</a>
        <a href="/about" style={{opacity: navOpacity[1]}} id="navButton">About</a>
        <a href="/contact" style={{opacity: navOpacity[2]}} id="navButton">Contact</a>
      </div>
    </div>
  );
}
