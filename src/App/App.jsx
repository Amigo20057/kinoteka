import { useEffect, useState } from 'react'
import { Header } from '../App/components/Header/Header'
import './App.css'
import { Comics } from './components/Comics/Comics'
import { Footer } from './components/Footer/Footer'
import { MainFilms } from './components/MainFilms/MainFilms'
import { PopularFilm } from './components/PopularFilm/PopularFilm'
import { SectionFilm } from './components/SectionFilm/SectionFilm'
import { SectionTvShows } from './components/SectionTvShows/SectionTvShows'
import { TvShows } from './components/TvShows/TvShows'

const API_KEY = '84f6f0f8-e532-4493-882c-43fbb3086a0a'
const API_URL =
	'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=1'

export function App() {
	const [activeElement, setActiveElement] = useState(1)

	const change = id => {
		setActiveElement(id)
	}

	const [films, setFilms] = useState([])
	const [tvShows, settvShows] = useState([])
	const [comics, setComics] = useState([])

	useEffect(() => {
		const getFilms = async () => {
			const response = await fetch(API_URL, {
				headers: {
					'Content-Type': 'application/json',
					'X-API-KEY': API_KEY,
				},
			})
			const responseData = await response.json()
			setFilms(responseData.items)
		}

		getFilms()
	}, [])

	useEffect(() => {
		const getTvShows = async () => {
			const response = await fetch(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1',
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': API_KEY,
					},
				}
			)
			const responseData = await response.json()
			settvShows(responseData.items)
		}
		getTvShows()
	}, [])

	useEffect(() => {
		const getTvShows = async () => {
			const response = await fetch(
				'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=COMICS_THEME&page=1',
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': API_KEY,
					},
				}
			)
			const responseData = await response.json()
			setComics(responseData.items)
		}
		getTvShows()
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
