import { useEffect, useState } from 'react'
import { getComics } from './Api/getComics'
import { getFilms } from './Api/getFilms'
import { getTvShows } from './Api/getTvShows'
import './App.css'
import {
	Comics,
	Footer,
	Header,
	MainFilms,
	PopularFilm,
	SectionFilm,
	SectionTvShows,
	TvShows,
} from './components/index'

export function App() {
	const [activeElement, setActiveElement] = useState(1)

	const change = id => {
		setActiveElement(id)
	}

	const [films, setFilms] = useState([])
	const [tvShows, settvShows] = useState([])
	const [comics, setComics] = useState([])

	useEffect(() => {
		const fetchFilms = async () => {
			const filmsData = await getFilms()
			setFilms(filmsData)
		}
		fetchFilms()
		console.log('getFilms')
	}, [])

	useEffect(() => {
		const fetchTvShows = async () => {
			const tvShowsData = await getTvShows()
			settvShows(tvShowsData)
		}
		fetchTvShows()
		console.log('getTvShows')
	}, [])

	useEffect(() => {
		const fetchComics = async () => {
			const comicsData = await getComics()
			setComics(comicsData)
		}
		fetchComics()
		console.log('getComics')
	}, [])

	return (
		<div className='App'>
			<header className='Header'>
				<Header activeElement={activeElement} change={change} />
			</header>
			<div className={activeElement === 1 ? 'Home' : 'HomeOff'}>
				<main>
					<section className='PopularFilm'>
						<PopularFilm films={films} />
					</section>
					<section className='MainFilms'>
						<MainFilms films={films} />
					</section>
					<section>
						<TvShows tvShows={tvShows} />
					</section>
					<section>
						<Comics comics={comics} />
					</section>
				</main>
			</div>
			<div className={activeElement === 2 ? 'Films' : 'FilmsOff'}>
				<SectionFilm />
			</div>
			<div className={activeElement === 3 ? 'TvShows' : 'TvShowsOff'}>
				<SectionTvShows />
			</div>
			<footer className='Footer'>
				<Footer />
			</footer>
		</div>
	)
}
