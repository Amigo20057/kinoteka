const API_KEY = '84f6f0f8-e532-4493-882c-43fbb3086a0a'
const API_URL =
	'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_250_TV_SHOWS&page=1'

export async function getTvShows() {
	const response = await fetch(API_URL, {
		headers: {
			'Content-Type': 'application/json',
			'X-API-KEY': API_KEY,
		},
	})
	const responseData = await response.json()
	return responseData.items
}
