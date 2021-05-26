import "./styles.scss";

export default function Footer() {

  var divStyles = 'none';

  if(String(window.location).split('/')[3] === '' || String(window.location).split('/')[3] === 'about' || String(window.location).split('/')[3] === 'contact'){}else{
    divStyles = 'block';
  }

  return (
    <div style={{display: divStyles}}>
      <br /> 
      <h3 style={{color: 'white', fontFamily: 'Inter', textAlign: 'center'}}> An Error Has Occured. This Page Does Not Exist. </h3>
    </div>
  );
}


