import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si"
import { NavLinksContainer } from './styles';

const NavLinks: React.FC = () => {
  return (
    <NavLinksContainer className='flex-center'>
      <NavLink end to={'/'} className={({isActive}) => 'flex-center' + (isActive? ' onPage' : '')  }> Inicio </NavLink>
      <NavLink end to={'about'} className={({isActive}) => 'flex-center' + (isActive? ' onPage' : '')  }> Sobre </NavLink>
      <Link to={'/'} className='flex-center'><SiWhatsapp/> Whatsapp </Link>
    </NavLinksContainer>
  );
}

export default NavLinks;