import React, { useEffect } from 'react'
import Header from './Header'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const Browse = () => {
  const dispatch = useDispatch();

  const fetchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=bfa491dd&s=all`)
    const data = await response.json()
    console.log(data)
    dispatch(addNowPlayingMovies(data.Search))

  }

  useEffect(() => {
    fetchMovies()
  }
  , [])

  return (
    <div className='text-white'>
      <Header />
    </div>
  )
}

export default Browse