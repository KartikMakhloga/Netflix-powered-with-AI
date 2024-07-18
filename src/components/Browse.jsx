import React, { useEffect } from 'react'
import Header from './Header'

const Browse = () => {
  const fetchMovies = async () => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=bfa491dd&s=all`)
    const data = await response.json()
    console.log(data)
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