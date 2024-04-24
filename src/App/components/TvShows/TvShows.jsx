import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Card } from '../../UI/Card/Card'

export function TvShows({ tvShows }) {
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(0)
	const render = () => (
		<>
			{tvShows.map(movie => (
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

	return (
		<div className='section'>
			{isOpen &&
				createPortal(
					<div className='cardDiv'>
						<Card
							films={tvShows}
							id={id}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
						/>
					</div>,
					document.querySelector('.Header')
				)}
			<h2>Популярные сериалы</h2>
			<div className='continueVieWatch'>{render()}</div>
		</div>
	)
}
