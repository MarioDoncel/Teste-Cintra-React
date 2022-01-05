import React from 'react';
import { Link } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si"
import { NavLinksContainer } from './styles';

const NavLinks: React.FC = () => {
  return (
    <NavLinksContainer className='flex-center'>
      <Link to={'/'} className='flex-center onPage'> Inicio </Link>
      <Link to={'/'} className='flex-center'> Sobre </Link>
      <Link to={'/'} className='flex-center'><SiWhatsapp/> Whatsapp </Link>
    </NavLinksContainer>
  );
}

export default NavLinks;