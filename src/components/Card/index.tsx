import React from 'react';

import { CardContainer } from './styles';

const Card: React.FC = () => {
  const img = 'https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fG1vdmllfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'

  return (
    <CardContainer className='flex-center'>
      <div className="img">
        <img src={img} alt="img" />
      </div>
      <h4>Homem-Aranha: Sem Volta Para Casa</h4>
      <p className='releaseDate'>Lançamento - <span className='released'>15/12/2021</span></p>
      <p className='resume'>
        Peter Parker é desmascarado e não consegue mais separar sua vida normal dos grandes riscos de ser um super-herói. Quando ele pede ajuda ao Doutor Estranho, os riscos se tornam ainda mais perigosos, e o forçam 
      </p>
    </CardContainer>
  );
}

export default Card;