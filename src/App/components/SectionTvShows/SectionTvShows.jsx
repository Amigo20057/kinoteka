import { useEffect, useState } from 'react'
import { Filters } from '../Filters/Filters'
import { GenresTvShows } from './GenresTvShows/GenresTvShows'
import { PagesFilms } from './PageTvShows/PageTvShows'
import { SideBar } from './SideBar/SideBar'

const API_KEY = '84f6f0f8-e532-4493-882c-43fbb3086a0a'

export function SectionTvShows() {
	const [activateBtn, setActivateBtn] = useState(1)
	const [tvShows, settvShows] = useState([])
	const [pages, setPages] = useState(1)
	const [pagesBtnAct, setPagesBtnAct] = useState(1)

	const change = id => {
		setActivateBtn(id)
	}
	const changePages = id => {
		setPagesBtnAct(id)
	}

	useEffect(() => {
		const getTvShows = async () => {
			const response = await fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=${pages}`,
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
	}, [pages])

	const allTvShows = () => {
		const newAllTvShows = []
		tvShows.map(movie => {
			newAllTvShows.push(movie)
		})
		return newAllTvShows
	}

	const filterTvShows = genre => {
		return tvShows
			.filter(movie => movie.genres.some(g => g.genre === genre))
			.map(movie => (
				<img
					key={movie.kinopoiskId}
					src={movie.posterUrlPreview}
					alt={movie.posterUrlPreview}
				/>
			))
	}

	const render = () => (
		<>
			{tvShows.map(movie => (
				<img
					key={movie.kinopoiskId}
					src={movie.posterUrlPreview}
					alt={movie.posterUrlPreview}
				/>
			))}
		</>
	)

	return (
		<div className='tvShows'>
			<div className='films'>
				<aside>
					<SideBar activateBtn={activateBtn} change={change} />
				</aside>
				<main className='AllFilms'>
					{/* <FilterFilms render={render} filterYear={filterYear} /> */}
					<Filters />
					<GenresTvShows
						activateBtn={activateBtn}
						filterTvShows={filterTvShows}
						render={render}
					/>
					<div className='Pages'>
						<PagesFilms
							pagesBtnAct={pagesBtnAct}
							setPages={setPages}
							changePages={changePages}
						/>
					</div>
				</main>
			</div>
		</div>
	)
}
