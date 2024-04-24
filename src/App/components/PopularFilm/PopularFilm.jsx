import { ChevronRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Card } from '../../UI/Card/Card'
import './PopularFilm.css'

export function PopularFilm({ films }) {
	const [title, setTitle] = useState('')
	const [isOpen, setIsOpen] = useState(false)
	const id = 258687

	useEffect(() => {
		const movie = films.find(movie => movie.kinopoiskId === id)
		if (movie) {
			setTitle(movie.nameRu)
		}
	}, [films])

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
			}}
		>
			<Card films={films} id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
			<div className='popularFilm'>
				<div
					className='film'
					style={{ backgroundImage: 'url(bg.jpg)', backgroundSize: 'cover' }}
				></div>
				<div className='filmInfo'>
					<h1>{title}</h1>
					<button onClick={() => setIsOpen(true)} className='inFilm'>
						Карточка фильма
						<span>
							<ChevronRight />
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}
