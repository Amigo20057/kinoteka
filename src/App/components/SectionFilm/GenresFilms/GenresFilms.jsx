export function GenresFilms({ activateBtn, filterFilms, render = { render } }) {
	return (
		<>
			<section className={activateBtn === 1 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{render()}</div>
			</section>
			<section className={activateBtn === 2 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('биография')}</div>
			</section>
			<section className={activateBtn === 3 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('боевик')}</div>
			</section>
			<section className={activateBtn === 4 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('военный')}</div>
			</section>
			<section className={activateBtn === 5 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('детектив')}</div>
			</section>
			<section className={activateBtn === 6 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('драма')}</div>
			</section>
			<section className={activateBtn === 7 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('история')}</div>
			</section>
			<section className={activateBtn === 8 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('комедия')}</div>
			</section>
			<section className={activateBtn === 9 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('криминал')}</div>
			</section>
			<section className={activateBtn === 10 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('приключения')}</div>
			</section>
			<section className={activateBtn === 11 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('триллер')}</div>
			</section>
			<section className={activateBtn === 12 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('мультфильм')}</div>
			</section>
			<section className={activateBtn === 13 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterFilms('фэнтези')}</div>
			</section>
		</>
	)
}
