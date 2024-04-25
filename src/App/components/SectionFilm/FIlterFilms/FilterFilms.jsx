import { useState } from 'react'

export function FilterFilms({ films, year, rating, country }) {
	// const [year, setYear] = useState('')
	// const [rating, setRating] = useState('')
	// const [country, setCountry] = useState('')
	const [filters, setFilters] = useState([year, rating, country])

	//ПЕРЕРОБИТИ ФУНКЦІЮ( ВОНА ВСЕРІВНО НЕ ЗАПРАЦЮЄ)))))) )
	const filtered = () => {
		if (filters.length === 0) {
			return
		}
		if (filters[0]) {
			return films
				.filter(movie => movie.genres.some(g => g.genre === genre))
				.map(movie => (
					<img
						key={movie.kinopoiskId}
						src={movie.posterUrlPreview}
						alt={movie.posterUrlPreview}
					/>
				))
		}
		if (filters[1]) {
			films.filter()
		}
		if (filters[2]) {
			films.filter()
		}
	}

	return <section></section>
}
