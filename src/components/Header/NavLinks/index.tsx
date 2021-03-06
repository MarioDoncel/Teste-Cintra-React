import React from 'react';
import {  NavLink } from 'react-router-dom';
import { SiWhatsapp } from "react-icons/si"
import { NavLinksContainer } from './styles';
import { MdOutlineLogout } from 'react-icons/md';


import { IUser  } from '../../../store/user.store';


interface INavlinks{
  user:IUser
  onClick:()=>void
}

const NavLinks = ({user, onClick}:INavlinks) => {
  return (
    <NavLinksContainer className='flex-center'>
      <NavLink end to={'/'} className={({isActive}) => 'flex-center' + (isActive? ' onPage' : '')  }> Inicio </NavLink>
      <NavLink end to={'about'} className={({isActive}) => 'flex-center' + (isActive? ' onPage' : '')  }> Sobre </NavLink>
      {user.username ? <div className="logout flex-center" onClick={onClick}>
                <MdOutlineLogout/>
                <span>Logout</span>
              </div>: '' }
      
      <a target={'_blank'} href={'https://api.whatsapp.com/send/?phone=5519996129909' }
      rel='noreferrer' className='flex-center'><SiWhatsapp/><span>Whatsapp</span>  </a>
    </NavLinksContainer>
  );
}

export default NavLinks;