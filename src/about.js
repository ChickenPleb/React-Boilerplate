import "./styles.scss";

export default function About() {
  var divStyles = 'block';

  if(String(window.location).split('/')[3] === 'about'){
    divStyles = 'block';
  }else{
    divStyles = 'none';
  }

  return (
    <div style={{display: divStyles}}>
      <h1 className="containerTitle">About This Boilerplate</h1>
    </div>
  );
}
