import logo from './logo.svg';
import hobit from './casahobbit.png'
import Button from 'react-bootstrap/Button'
import './App.css';
import Home from './componentes/home/home';
import CNavbar from './componentes/navbar/CNavbar';
import CFooter from './componentes/footer/CFooter';
import CButton from './componentes/button/CButton';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Contacto from './componentes/contacto/Contacto';
import Cv from './componentes/cv/cv';


let buttonText = "Boton"

function App() {
  return (

    <BrowserRouter>
      <CNavbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/cv">
        <Cv />
        </Route>
        <Route exact path="/contacto">
        <Contacto />
        </Route>
      </Switch>
      <CFooter />

    </BrowserRouter>

  );
}

export default App;
