const API_KEY = 'c2c676b0890b073da0540630754e577e';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {

  const url = `${ROOT_URL}&q=${cityName},us`;
  const request = fetch(url)
    .then(resp => resp.json());

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
