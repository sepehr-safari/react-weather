import { WEATHER_API_URL, WEATHER_API_KEY } from './constants';

const fetchWeatherData = async (city) => {
  const url = `${WEATHER_API_URL}/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`;

  try {
    const weatherData = await fetch(url);
    const weatherDataJson = weatherData.json();

    return weatherDataJson;
  } catch (error) {
    return error;
  }
};

export default fetchWeatherData;
