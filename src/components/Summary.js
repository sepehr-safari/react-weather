// Libraries
import { Col, Image, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

// Helpers
import GetDateTimeString from '../helpers/getDateTimeString';

const Summary = ({ weatherData }) => {
  return (
    <>
      <Row className="summary align-items-center">
        <Col className="flex-grow-0">
          <span className="temp">
            {weatherData ? Math.floor(weatherData.main.temp) : <Skeleton width="10rem" />}
            {weatherData && <sup>&deg;</sup>}
          </span>
        </Col>

        <Col>
          <Row className="align-items-center align-content-center w-100 h-100">
            <Col xs="9" lg="6" xxl="4">
              <span className="city">{weatherData ? weatherData.name : <Skeleton />}</span>
            </Col>

            <Col xs="3" lg="2" className="text-center">
              <span className="icon">
                {weatherData ? (
                  <Image src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`} />
                ) : (
                  <Skeleton />
                )}
              </span>
            </Col>

            <div className="w-100" />

            <Col xs="9" lg="6" xxl="4">
              <span className="date">{weatherData ? GetDateTimeString(weatherData.dt) : <Skeleton />}</span>
            </Col>

            <Col xs="3" lg="2" className="text-center">
              <span className="cond">{weatherData ? weatherData.weather[0].main : <Skeleton />}</span>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Summary;
