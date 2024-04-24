import { useRef, useState } from 'react'
import './Filters.css'

export function Filters({ filterYear }) {
	const [selectedYear, setSelectedYear] = useState('')
	const yearRef = useRef(null)
	const [filter, setFilter] = useState(false)
	const renderYear = () => {
		const years = []
		for (let i = 2023; i >= 1981; i--) {
			years.push(
				<option key={i} value={i}>
					{i}
				</option>
			)
		}
		return years
	}

	const renderRating = () => {
		const rating = []
		for (let i = 10; i >= 5; i--) {
			rating.push(
				<option key={i} value={i}>
					{i}
				</option>
			)
		}
		return rating
	}

	const renderCountry = () => (
		<>
			<option value='США'>США</option>
			<option value='Францыя'>Францыя</option>
			<option value='Великобритания'>Великобритания</option>
			<option value='Канада'>Канада</option>
		</>
	)

	return (
		<>
			<div className={filter === true ? 'filters' : 'filtersOff'}>
				<div className='openFiltersBtns'>
					<button onClick={() => setFilter(prev => !prev)}>
						{filter === true ? 'Свернуть' : 'Фильтры'}
					</button>
					<button>По рейтингу</button>
				</div>
				<div className={filter === true ? 'container' : 'containerOff'}>
					<div>
						<select
							ref={yearRef}
							name='year'
							id='year'
							onChange={e => setSelectedYear(e.target.value)}
						>
							<option value=''>Год</option>
							{renderYear()}
						</select>
						<select name='rating' id='rating'>
							<option value=''>Рейтинг</option>
							{renderRating()}
						</select>
						<select name='country' id='country'>
							<option value=''>Страна</option>
							{renderCountry()}
						</select>
					</div>
					<button className='resetBtn'>Сбросить Фильтры</button>
				</div>
			</div>
		</>
	)
}
