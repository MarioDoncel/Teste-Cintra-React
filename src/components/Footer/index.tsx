import React from 'react';

import { FooterContainer } from './styles';
import Logo from '../Logo';

const Footer: React.FC = () => {
  return (
    <FooterContainer className='flex-center'>
      <div className="container">
        <div className="rights">Teste Cinema - Todos os direitos reservados.</div>
        <div className="developedBy flex-center">
          Desenvolvido por: <Logo width={60}/>
        </div>
      </div>
      
    </FooterContainer>
  );
}

export default Footer;