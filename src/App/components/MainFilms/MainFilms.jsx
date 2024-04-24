import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Card } from '../Card/Card'
import './MainFilms.css'

export function MainFilms({ films }) {
	console.log(films)
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(0)
	const render = () => (
		<>
			{films.map(movie => (
				<img
					onClick={() => {
						setId(movie.kinopoiskId)
						setIsOpen(true)
					}}
					key={movie.kinopoiskId}
					src={movie.posterUrlPreview}
					alt={movie.posterUrlPreview}
				/>
			))}
		</>
	)

	// const genres = () => {
	// 	const genre = films.map(genre => {
	// 		console.log(genre.genres.map(genre => genre.genre))
	// 	})
	// }

	// genres()

	return (
		<div className='section'>
			{isOpen &&
				createPortal(
					<div className='cardDiv'>
						<Card films={films} id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
					</div>,
					document.querySelector('.Header')
				)}

			<h2>Популярные фильмы</h2>
			<div className='continueVieWatch'>{render()}</div>
		</div>
	)
}
