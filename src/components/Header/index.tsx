import React, { HTMLAttributes } from 'react';
import Logo from '../Logo';
import NavLinks from './NavLinks';

import { HeaderContainer } from './styles';




const Header = ({onClick,children}:HTMLAttributes<HTMLDivElement>) => {
     return (
        <HeaderContainer onClick={onClick}>
          <div className="container">
            <Logo/>
            <NavLinks/>
          </div>
          
            {children}
        </HeaderContainer>
    )
}

export default Header;