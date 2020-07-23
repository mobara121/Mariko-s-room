import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Bulldog from '../assets/152-1523599_bulldog-outline-clipart-english-bulldog-clip-art-png.png';
import Container from '@material-ui/core/Container';

function Header() {
  return (
    <div className="Header">
      <p id="Mariko">Mariko's room</p>
      <Container maxWidth="sm">
        <img id="bulldog" src={Bulldog} alt="bulldog"/>
      </Container>
    </div>
  );
}

export default Header;