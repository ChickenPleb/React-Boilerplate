import "./styles.scss";

export default function Contact() {
  var divStyles = 'block';

  if(String(window.location).split('/')[3] === 'contact'){
    divStyles = 'block';
  }else{
    divStyles = 'none';
  }

  return (
    <div style={{display: divStyles}}>
        <h1 className="containerTitle">Ask For Help</h1>
    </div>
  );
}
