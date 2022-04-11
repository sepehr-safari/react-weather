// Libraries
import { Col, Row } from 'react-bootstrap';
import Skeleton from 'react-loading-skeleton';

const Details = ({ weatherData }) => {
  return weatherData ? (
    <Row className="details">
      <Col xs="6">Feels Like</Col>
      <Col xs="6">{weatherData?.main.feels_like || <Skeleton />}</Col>

      <Col xs="6">Min Temprature</Col>
      <Col xs="6">{weatherData?.main.temp_min || <Skeleton />}</Col>

      <Col xs="6">Max Temprature</Col>
      <Col xs="6">{weatherData?.main.temp_max || <Skeleton />}</Col>

      <Col xs="6">Humidity</Col>
      <Col xs="6">{weatherData?.main.humidity || <Skeleton />}</Col>

      <Col xs="6">Pressure</Col>
      <Col xs="6">{weatherData?.main.pressure || <Skeleton />}</Col>

      <Col xs="6">Visibility</Col>
      <Col xs="6">{weatherData?.visibility || <Skeleton />}</Col>

      <Col xs="6">Wind Speed</Col>
      <Col xs="6">{weatherData?.wind.speed || <Skeleton />}</Col>
    </Row>
  ) : (
    <Row className="details">
      <Col>
        <Skeleton count="7" />
      </Col>
    </Row>
  );
};

export default Details;
