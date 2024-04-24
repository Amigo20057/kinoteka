export function PagesFilms({ pagesBtnAct, setPages, changePages }) {
	const totalPages = 13
	const renderPages = () => {
		const pages = []
		const startPage = Math.max(1, pagesBtnAct - 2)
		const endPage = Math.min(totalPages, startPage + 4)

		if (startPage > 1) {
			pages.push(
				<button key={1} className='pagesBtn' onClick={() => handlePageClick(1)}>
					1
				</button>
			)
			if (startPage > 2) {
				pages.push(
					<span style={{ color: '#797a92' }} key='startDots'>
						...
					</span>
				)
			}
		}

		for (let i = startPage; i <= endPage; i++) {
			pages.push(
				<button
					key={i}
					className={`pagesBtn ${pagesBtnAct === i ? 'activePages' : ''}`}
					onClick={() => handlePageClick(i)}
				>
					{i}
				</button>
			)
		}

		if (endPage < totalPages) {
			if (endPage < totalPages - 1) {
				pages.push(
					<span style={{ color: '#797a92' }} key='endDots'>
						...
					</span>
				)
			}
			pages.push(
				<button
					key={totalPages}
					className='pagesBtn'
					onClick={() => handlePageClick(totalPages)}
				>
					{totalPages}
				</button>
			)
		}

		return pages
	}

	const handlePageClick = page => {
		setPages(page)
		changePages(page)
	}

	return <>{renderPages()}</>
}
