//Libraries
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

//CSS Modules
import 'react-loading-skeleton/dist/skeleton.css';
import './App.scss';

//Components
import Details from './components/Details';
import MapView from './components/MapView';
import SearchBox from './components/SearchBox';
import Summary from './components/Summary';

//Helpers
import { UNSPLASH_SOURCE_URL } from './helpers/constants';
import fetchWeatherData from './helpers/fetchWeatherData';

const App = () => {
  //Initialize States
  const [weatherData, setWeatherData] = useState(null);
  const [relativeImage, setRelativeImage] = useState('/images/clouds.jpg');
  const [searchBoxValue, setSearchBoxValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [lng, setLng] = useState(51.4215);
  const [lat, setLat] = useState(35.6944);

  const fetchWeatherDataAndSetWeatherState = async (city) => {
    try {
      const fetchedWeatherData = await fetchWeatherData(city);

      if (fetchedWeatherData && fetchedWeatherData.cod === 200) {
        setWeatherData(fetchedWeatherData);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    //Initialize Location
    const city = JSON.parse(localStorage.getItem('city')) || 'Tehran';

    setLoading(true);

    fetchWeatherDataAndSetWeatherState(city);

    setLoading(false);
  }, []);

  useEffect(() => {
    //Update app on location change
    if (weatherData) {
      localStorage.setItem('city', JSON.stringify(weatherData.name));

      const weatherDescription = weatherData.weather[0].main.replace(' ', ',');

      const backgroundImage = new Image();
      backgroundImage.onload = () => {
        setRelativeImage(backgroundImage.src);
      };
      backgroundImage.src = UNSPLASH_SOURCE_URL + weatherDescription;

      setLng(weatherData.coord.lon);
      setLat(weatherData.coord.lat);
    }
  }, [weatherData]);

  useEffect(() => {
    //Clear Searbox after complete searching
    loading || setSearchBoxValue('');
  }, [loading]);

  return (
    <SkeletonTheme baseColor="var(--bs-gray-700)" highlightColor="var(--bs-gray-600)">
      <Container fluid className="h-100">
        <Row
          style={{
            backgroundImage: `url(${relativeImage})`,
            backgroundSize: 'cover',
          }}
          className="min-vh-100"
        >
          <Col xs="12" lg="7" xl="8" className="p-5 p-lg-6" style={{ minHeight: '24rem' }}>
            <Row className="align-content-between h-100">
              <Col xs="12">
                <span>Himmel.io Weather App</span>
              </Col>

              <Col xs="12">
                <Summary weatherData={weatherData} />
              </Col>
            </Row>
          </Col>

          <Col xs="12" lg="5" xl="4" className="p-5 p-lg-6" style={{ minHeight: '80vh' }}>
            <div className="black-box">
              <SearchBox
                searchBoxValue={searchBoxValue}
                setSearchBoxValue={setSearchBoxValue}
                setWeatherData={setWeatherData}
                loading={loading}
                setLoading={setLoading}
              />

              <hr />

              {loading ? <Skeleton height="16rem" /> : <MapView lng={lng} lat={lat} />}

              <hr />

              <Details weatherData={weatherData} />
            </div>
          </Col>
        </Row>
      </Container>
    </SkeletonTheme>
  );
};

export default App;
