const API_KEY = '84f6f0f8-e532-4493-882c-43fbb3086a0a'
const API_URL =
	'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=COMICS_THEME&page=1'

export async function getComics() {
	const response = await fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY,
		},
	})
	const responseData = await response.json()
	return responseData.items
}
