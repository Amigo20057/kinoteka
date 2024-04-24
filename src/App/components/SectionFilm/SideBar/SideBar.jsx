export function SideBar({ activateBtn, change }) {
	return (
		<>
			<ul>
				<li>
					<button
						onClick={() => change(1)}
						className={`listBtn ${activateBtn === 1 ? 'active' : ''}`}
					>
						Все фильмы
					</button>
				</li>
				<li>
					<button
						onClick={() => change(2)}
						className={`listBtn ${activateBtn === 2 ? 'active' : ''}`}
					>
						Биографические
					</button>
				</li>
				<li>
					<button
						onClick={() => change(3)}
						className={`listBtn ${activateBtn === 3 ? 'active' : ''}`}
					>
						Боевики
					</button>
				</li>
				<li>
					<button
						onClick={() => change(4)}
						className={`listBtn ${activateBtn === 4 ? 'active' : ''}`}
					>
						Военные
					</button>
				</li>
				<li>
					<button
						onClick={() => change(5)}
						className={`listBtn ${activateBtn === 5 ? 'active' : ''}`}
					>
						Детективы
					</button>
				</li>
				<li>
					<button
						onClick={() => change(6)}
						className={`listBtn ${activateBtn === 6 ? 'active' : ''}`}
					>
						Драмы
					</button>
				</li>
				<li>
					<button
						onClick={() => change(7)}
						className={`listBtn ${activateBtn === 7 ? 'active' : ''}`}
					>
						Исторические
					</button>
				</li>
				<li>
					<button
						onClick={() => change(8)}
						className={`listBtn ${activateBtn === 8 ? 'active' : ''}`}
					>
						Комедии
					</button>
				</li>
				<li>
					<button
						onClick={() => change(9)}
						className={`listBtn ${activateBtn === 9 ? 'active' : ''}`}
					>
						Крименальные
					</button>
				</li>
				<li>
					<button
						onClick={() => change(10)}
						className={`listBtn ${activateBtn === 10 ? 'active' : ''}`}
					>
						Приключения
					</button>
				</li>
				<li>
					<button
						onClick={() => change(11)}
						className={`listBtn ${activateBtn === 11 ? 'active' : ''}`}
					>
						Триллеры
					</button>
				</li>
				<li>
					<button
						onClick={() => change(12)}
						className={`listBtn ${activateBtn === 12 ? 'active' : ''}`}
					>
						Мультфильмы
					</button>
				</li>
				<li>
					<button
						onClick={() => change(13)}
						className={`listBtn ${activateBtn === 13 ? 'active' : ''}`}
					>
						фэнтези
					</button>
				</li>
			</ul>
		</>
	)
}
