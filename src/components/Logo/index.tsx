import React from 'react';

import { LogoContainer } from './styles';
import logo from '../../assets/movie-icon.png'

export interface ILogo{
  width?: number;
  height?:number;
}

const Logo = ({width = 75, height = 55}:ILogo) => {
  return (
    <LogoContainer width={width} height={height} className='flex-center'>
      <img src={logo} alt="Logo" />
    </LogoContainer>
  );
}

export default Logo;