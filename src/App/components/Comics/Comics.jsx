import { useState } from 'react'
import { createPortal } from 'react-dom'
import { Card } from '../Card/Card'

export function Comics({ comics }) {
	const [isOpen, setIsOpen] = useState(false)
	const [id, setId] = useState(0)
	const render = () => (
		<>
			{comics.map(movie => (
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
			{/* <div className='cardDiv'>
				<Card films={comics} id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
			</div> */}
			{isOpen &&
				createPortal(
					<div className='cardDiv'>
						<Card
							films={comics}
							id={id}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
						/>
					</div>,
					document.querySelector('.Header')
				)}
			<h2>Популярные комиксы</h2>
			<div className='continueVieWatch'>{render()}</div>
		</div>
	)
}
