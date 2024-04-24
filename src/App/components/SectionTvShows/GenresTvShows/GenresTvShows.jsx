export function GenresTvShows({
	activateBtn,
	filterTvShows,
	render = { render },
}) {
	return (
		<>
			<section className={activateBtn === 1 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{render()}</div>
			</section>
			<section className={activateBtn === 2 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('биография')}</div>
			</section>
			<section className={activateBtn === 3 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('боевик')}</div>
			</section>
			<section className={activateBtn === 4 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('военный')}</div>
			</section>
			<section className={activateBtn === 5 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('детектив')}</div>
			</section>
			<section className={activateBtn === 6 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('драма')}</div>
			</section>
			<section className={activateBtn === 7 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('история')}</div>
			</section>
			<section className={activateBtn === 8 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('комедия')}</div>
			</section>
			<section className={activateBtn === 9 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('криминал')}</div>
			</section>
			<section className={activateBtn === 10 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('приключения')}</div>
			</section>
			<section className={activateBtn === 11 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('триллер')}</div>
			</section>
			<section className={activateBtn === 12 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('мультфильм')}</div>
			</section>
			<section className={activateBtn === 13 ? '' : 'sectionOff'}>
				<div className='AllFilm'>{filterTvShows('фэнтези')}</div>
			</section>
		</>
	)
}
