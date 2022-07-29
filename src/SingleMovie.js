import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { API_ENDPOINT } from './context'

const SingleMovie = () => {
  const [data, setData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState({ show: false, msg: '' })
  const { id } = useParams()

  const getMovie = async (url) => {
    try {
      setIsLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      if (data.response === 'False') {
        setError({ show: true, msg: data.Error })
        setIsLoading(false)
      } else {
        setData(data)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
      setError({ show: true, msg: error })
    }

    setIsLoading(false)
  }
  useEffect(() => {
    getMovie(`${API_ENDPOINT}&i=${id}`)
  }, [])

  if (isLoading) {
    return <div className="loading"></div>
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link className="btn" to={'/'}>
          Back to movies
        </Link>
      </div>
    )
  }
  const { Poster: poster, Title: title, Plot: plot, Year: year } = data
  return (
    <section className="single-movie">
      <img src={poster} alt={title} />
      <div className="single-movie-info">
        <h2>{title}</h2>
        <p>{plot}</p>
        <h4>{year}</h4>
        <Link className="btn" to={'/'}>
          Back to movies
        </Link>
      </div>
    </section>
  )
}

export default SingleMovie
