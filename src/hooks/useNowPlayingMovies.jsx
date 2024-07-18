import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies = () => {
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
}

export default useNowPlayingMovies;