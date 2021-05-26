import "./styles.scss";
import Header from './header';
import Home from './home';
import About from './about';
import Contact from './contact';


export default function App() {


  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Contact />
    </div>
  );
}
