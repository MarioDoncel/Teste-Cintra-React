/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from '../Card';
// import data from '../../MOCK.DATA/data.json'

import { FeaturedContainer } from './styles';
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux';
import { IMovie } from '../../services/resources/movies';

import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

const categories = ['Ação','Aventura','Animação','Comédia','Crime','Documentário']



const Featured: React.FC = () => {
  const movies = useSelector((state:RootState)=> state.playingMovies.movies)
  const navigate = useNavigate()
  const itemsPerPage = 4
  const [currentMovies, setCurrentMovies] = useState<IMovie[]>([])
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  
  type TClickPaginate ={
    selected: number
  }
  const handleCardClick = (id:number) => {
    navigate(`/movies/${id}`)
  };
  const handlePageClick = ({selected}:TClickPaginate) => {
    const newOffset = (selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    if (movies.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentMovies(movies.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(movies.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage]);

  return (
    <FeaturedContainer className='flex-center'>
      <h3>Destaques</h3>
      <div className="categoryNavigation">
        {categories.map(category=> (
          <span key={category}>{category}</span>
        ))}
      </div>
      <div className="cards">
        {currentMovies.map(({title, release_date, overview, poster_path, id})=>(<Card title={title} release_date={release_date} overview={overview} poster_path={poster_path} id={id} key={id} onclick={(id:number)=>handleCardClick(id)}/>))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        containerClassName='pagination'
      />
    </FeaturedContainer>
    
  );
}

export default Featured;