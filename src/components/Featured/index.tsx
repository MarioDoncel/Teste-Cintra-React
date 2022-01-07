/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react';
import Card from '../Card';
// import data from '../../MOCK.DATA/data.json'

import { FeaturedContainer } from './styles';
import ReactPaginate from 'react-paginate'
import { useSelector } from 'react-redux';
import { IMovie } from '../../services/resources/movies';

import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import Categories from '../../contextProviders/CategoriesProvider';

const Featured: React.FC = () => {
  const { categories } = useContext(Categories)
  const movies = useSelector((state:RootState)=> state.playingMovies.movies)
  const navigate = useNavigate()
  const itemsPerPage = 4
  const [currentMovies, setCurrentMovies] = useState<IMovie[]>([])
  const [filteredMovies, setfilteredMovies] = useState<IMovie[]>([])
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const [filter, setFilter] = useState<number[]>([])

  
  type TClickPaginate ={
    selected: number
  }
  const handleCategoryclick = (e:React.MouseEvent, id:number) => {
    const span = e.target as HTMLSpanElement
    span.classList.contains('selected') ? filter.splice(filter.indexOf(id),1) :filter.push(id)
    span.classList.toggle('selected')
    let moviesFiltered = movies.filter(movie => {
      let match = false
      filter.forEach(categorie=> {
        if (movie.genre_ids.includes(categorie)) return match = true
      })
      return match
    })
    if (moviesFiltered.length === 0 ) moviesFiltered = [...movies]
    setfilteredMovies(moviesFiltered)
    setCurrentMovies(moviesFiltered.slice(0, itemsPerPage))
    setPageCount(Math.ceil(moviesFiltered.length / itemsPerPage));
    setFilter(filter)
  };
  const handleCardClick = (id:number) => {
    navigate(`/movies/${id}`)
  };
  const handlePaginationClick = ({selected}:TClickPaginate) => {
    const newOffset = (selected * itemsPerPage) % movies.length;
    setItemOffset(newOffset);
  };

  

  useEffect(() => {
    const moviesToPaginate = filteredMovies.length>0 ? filteredMovies : movies
    if (movies.length > 0) {
      const endOffset = itemOffset + itemsPerPage;
      setCurrentMovies(moviesToPaginate.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(moviesToPaginate.length / itemsPerPage));
    }
  }, [itemOffset, itemsPerPage]);

  return (
    <FeaturedContainer className='flex-center'>
      <h3>Destaques</h3>
      <div className="categoryNavigation">
        {categories.map(category=> (
          <span key={category.id} onClick={(e)=>handleCategoryclick(e, category.id)}>{category.name}</span>
        ))}
      </div>
      <div className="cards">
        {currentMovies.map(({title, release_date, overview, poster_path, id})=>(<Card title={title} release_date={release_date} overview={overview} poster_path={poster_path} id={id} key={id} onclick={(id:number)=>handleCardClick(id)}/>))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel=" >"
        onPageChange={handlePaginationClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="< "
        containerClassName='pagination'
      />
    </FeaturedContainer>
    
  );
}

export default Featured;