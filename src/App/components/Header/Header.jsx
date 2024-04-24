import { BellRing, Bookmark, Search } from 'lucide-react'
import React from 'react'
import './Header.css'

export function Header({ activeElement, change }) {
	return (
		<div className='header'>
			<div onClick={() => change(1)} className='logo'>
				<img src='tickets.png' alt='tickets' width={50} height={55} />
				<h1>Kinoteka</h1>
			</div>
			<nav className='navigation headerNavigation'>
				<ul className='navList'>
					<li className='navItem'>
						<button
							onClick={() => change(1)}
							className={`navLink ${activeElement === 1 ? 'active' : ''}`}
						>
							Главная
						</button>
					</li>
					<li className='navItem'>
						<button
							onClick={() => change(2)}
							className={`navLink ${activeElement === 2 ? 'active' : ''}`}
						>
							Фильмы
						</button>
					</li>
					<li className='navItem'>
						<button
							onClick={() => change(3)}
							className={`navLink ${activeElement === 3 ? 'active' : ''}`}
						>
							Сериалы
						</button>
					</li>
					<li className='navItem'>
						<button
							onClick={() => change(4)}
							className={`navLink ${activeElement === 4 ? 'active' : ''}`}
						>
							Мультфильмы
						</button>
					</li>
					<li className='navItem'>
						<button
							onClick={() => change(5)}
							className={`navLink ${activeElement === 5 ? 'active' : ''}`}
						>
							ТВ
						</button>
					</li>
					<li className='navItem'>
						<button
							onClick={() => change(6)}
							className={`navLink ${activeElement === 6 ? 'active' : ''}`}
						>
							Бесплатно
						</button>
					</li>
					<li className='navItem'>
						<button
							onClick={() => change(7)}
							className={`navLink ${activeElement === 7 ? 'active' : ''}`}
						>
							Календарь премьер
						</button>
					</li>
					<li className='navItemBtn'>
						<button></button>
					</li>
				</ul>
			</nav>
			<div className='profile'>
				<Search style={{ marginLeft: '15px', opacity: '70%' }} />
				<input type='text' placeholder='Поиск...' />
				<Bookmark style={{ marginLeft: '15px', opacity: '70%' }} />
				<BellRing style={{ marginLeft: '15px', opacity: '70%' }} />
				<div
					className='avatar'
					style={{
						backgroundImage: 'url(User.png)',
						WebkitBackgroundSize: 'cover',
					}}
				></div>
			</div>
		</div>
	)
}
