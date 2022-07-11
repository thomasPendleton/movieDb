import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies } = useGlobalContext()
  console.log(movies)
  return (
    <main>
      {movies.map((movie) => {
        // const {} = movie
        return <h2>{movie.Title}</h2>
      })}
    </main>
  )
}


export default Movies
