import './Footer.css'

export function Footer() {
	return (
		<div className='footer'>
			<div className='navigation'>
				<div className='About'>
					<h3>О нас</h3>
					<ul className='aboutList'>
						<li className='aboutItem'>
							<a className='aboutLink' href='#'>
								О сервисе
							</a>
						</li>
						<li className='aboutItem'>
							<a className='aboutLink' href='#'>
								Партнерам
							</a>
						</li>
						<li className='aboutItem'>
							<a className='aboutLink' href='#'>
								Пользоватильское соглашение
							</a>
						</li>
						<li className='aboutItem'>
							<a className='aboutLink' href='#'>
								Политека конфиденциальности
							</a>
						</li>
					</ul>
				</div>
				<div className='Devices'>
					<h3>Устройства</h3>
					<ul className='devicesList'>
						<li className='devicesItem'>
							<a className='devicesLink' href='#'>
								Телевизоры со SmartTV или Android TV
							</a>
						</li>
						<li className='devicesItem'>
							<a className='devicesLink' href='#'>
								ТВ и игровые приставки
							</a>
						</li>
						<li className='devicesItem'>
							<a className='devicesLink' href='#'>
								Смартфоны и планшеты
							</a>
						</li>
						<li className='devicesItem'>
							<a className='devicesLink' href='#'>
								Можно ли смотреть на моем устройстве?
							</a>
						</li>
					</ul>
				</div>
				<div className='Supports'>
					<h3>Поддержка</h3>
					<ul className='supportsList'>
						<li className='supportsItem'>
							<a className='supportsLink' href='#'>
								support@moviemix.ua
							</a>
						</li>
						<li className='supportsItem'>
							<a className='supportsLink' href='#'>
								380 (97) 348-48-58 Бесплатно по Украине
							</a>
						</li>
						<li className='supportsItem'>
							<a className='supportsLink' href='#'>
								Написать в Whatsapp
							</a>
						</li>
						<li className='supportsItem'>
							<a className='supportsLink' href='#'>
								FAQ
							</a>
						</li>
					</ul>
				</div>
				<div className='Media'>
					<h3>Наши соц. сети</h3>
					<div className='mediaIcon'>
						<div className='icon'>
							<img src='facebook.png' alt='facebook' />
						</div>
						<div className='icon'>
							<img src='instagram.png' alt='instagram' />
						</div>
						<div className='icon'>
							<img src='twitter.png' alt='twitter' />
						</div>
						<div className='icon'>
							<img src='youtube.png' alt='youtube' />
						</div>
					</div>
					<button>Нужна помощь?</button>
				</div>
			</div>
		</div>
	)
}
