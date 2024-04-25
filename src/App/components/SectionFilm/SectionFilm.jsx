// SectionFilm.js
import { useEffect, useState } from 'react'
import { Filters } from '../Filters/Filters'
import { GenresFilms } from './GenresFilms/GenresFilms'
import { PagesFilms } from './PagesFIlms/PagesFilms'
import './SectionFilm.css'
import { SideBar } from './SideBar/SideBar'

const API_KEY = '84f6f0f8-e532-4493-882c-43fbb3086a0a'

export function SectionFilm() {
	const [activateBtn, setActivateBtn] = useState(1)
	const [films, setFilms] = useState([])
	const [pages, setPages] = useState(1)
	const [pagesBtnAct, setPagesBtnAct] = useState(1)
	const change = id => {
		setActivateBtn(id)
	}
	const changePages = id => {
		setPagesBtnAct(id)
	}

	useEffect(() => {
		const getFilms = async () => {
			const response = await fetch(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_MOVIES&page=${pages}`,
				{
					headers: {
						'Content-Type': 'application/json',
						'X-API-KEY': API_KEY,
					},
				}
			)
			const responseData = await response.json()
			setFilms(responseData.items)
		}
		console.log('setPages')
		getFilms()
	}, [pages])

	// const arrFilms = () => {
	// 	const NewArrFilms = []
	// 	films.map(movie => {
	// 		NewArrFilms.push(movie)
	// 	})
	// 	return NewArrFilms
	// }

	// console.log(arrFilms())

	const render = () => (
		<>
			{films.map(movie => (
				<img
					key={movie.kinopoiskId}
					src={movie.posterUrlPreview}
					alt={movie.posterUrlPreview}
				/>
			))}
		</>
	)

	const filterFilms = genre => {
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

	const filterYear = selectedYear => {
		return films
			.filter(movie => movie.year === selectedYear)
			.map(movie => (
				<img
					key={movie.kinopoiskId}
					src={movie.posterUrlPreview}
					alt={movie.posterUrlPreview}
				/>
			))
	}

	return (
		<div className='films'>
			<aside>
				<SideBar activateBtn={activateBtn} change={change} />
			</aside>
			<main className='AllFilms'>
				<Filters />
				{/* <FilterFilms render={render} filterYear={filterYear} /> */}
				<GenresFilms
					activateBtn={activateBtn}
					filterFilms={filterFilms}
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
	)
}
