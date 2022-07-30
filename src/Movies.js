import React from 'react'
import { useGlobalContext } from './context'
import { Link } from 'react-router-dom'
const url =
  'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'

const Movies = () => {
  const { movies, isLoading } = useGlobalContext()

  if (isLoading) {
    return <section className="loading"></section>
  }

  return (
    <section className="movies">
      {movies.map((movie) => {
        const { imdbID: id, Title: title, Year: year, Poster: poster } = movie

        return (
          <Link to={`/movies/${id}`} className="movie" key={id}>
            <article>
              <img src={poster === 'N/A' ? url : poster} alt={title} />
              <div className="movie-info">
                <h4 className="title">{title}</h4>
                <p>{year}</p>
              </div>
            </article>
          </Link>
        )
      })}
    </section>
  )
}

export default Movies
