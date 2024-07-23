// fetchData.js
import axios from 'axios';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

const fetchWeatherData = async (city) => {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: city,
        appid: "f59d4b723fb87b8bb37214373fb255ad",
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching the weather data', error);
    return null;
  }
};

export default fetchWeatherData;
