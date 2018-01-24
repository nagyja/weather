import axios from 'axios';
const API_KEY = 'f9a64d822a256901b285470247720608';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//Action type convention, contain action in a exported const to reduce potential for issues
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
          const url = `${ROOT_URL}&q=${city},us`;
          const request = axios.get(url);
          console.log(url);
          console.log('Request: ', request);

          return {
                    type: FETCH_WEATHER,
                    payload: request
          };
}