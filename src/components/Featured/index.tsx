import React from 'react';
import Card from '../Card';


import { FeaturedContainer } from './styles';

const categories = ['Ação','Aventura','Animação','Comédia','Crime','Documentário']
const cards = Array(5).fill('2')
console.log(cards)
const Featured: React.FC = () => {
  return (
    <FeaturedContainer className='flex-center'>
      <h3>Destaques</h3>
      <div className="categoryNavigation">
        {categories.map(category=> (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className="cards">
        {cards.map(card=>(<Card key={card}/>))}
      </div>
      <h2>Pagination</h2>
    </FeaturedContainer>
    
  );
}

export default Featured;