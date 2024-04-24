import { CircleX } from 'lucide-react'
import { useEffect, useState } from 'react'
import './Card.css'

export function Card({ films, id, isOpen, setIsOpen }) {
	const [name, setName] = useState('')
	const [rating, setRating] = useState(0)
	const [genres, setGenres] = useState([])
	const [countries, setCountries] = useState([])
	const [year, setYear] = useState(0)
	const [poster, setPoster] = useState('')

	useEffect(() => {
		const movie = films.find(movie => movie.kinopoiskId === id)
		if (movie) {
			setName(movie.nameRu)
			setRating(movie.ratingImdb)
			// movie.genres.genre
			const movieGenres = movie.genres.map(genre => genre.genre)
			setGenres(movieGenres)
			const movieCountries = movie.countries.map(country => country.country)
			setCountries(movieCountries)
			setYear(movie.year)
			setPoster(movie.posterUrl)
			// setPoster(movie.posterUrlPreview)
		}
	}, [films, id])

	return (
		<div className={isOpen ? 'cardOpen' : 'card'}>
			<div className='info'>
				<h2>{name}</h2>
				<div className='ratingDiv'>
					Рейтинг:
					<span className='rating'>{rating}</span>
				</div>
				<p className='genres'>Жанры: {genres.join(', ')}</p>
				<p className='countries'>Страна: {countries.join(', ')}</p>
				<p className='year'>Год: {year}</p>
			</div>
			<div className='poster'>
				<img src={poster} alt={poster} />
			</div>
			<div>
				<CircleX onClick={() => setIsOpen(false)} />
			</div>
		</div>
	)
}
