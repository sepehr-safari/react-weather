// Libraries
import { Form } from 'react-bootstrap';

// Helpers
import fetchWeatherData from '../helpers/fetchWeatherData';

const SearchBox = ({ searchBoxValue, setSearchBoxValue, setWeatherData, loading, setLoading }) => {
  const submitSearch = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const fetchedWeatherData = await fetchWeatherData(searchBoxValue);

      if (fetchedWeatherData && fetchedWeatherData.cod === 200) {
        setWeatherData(fetchedWeatherData);
      }
    } catch (error) {
      alert(error);
    }

    setLoading(false);
  };

  return (
    <Form onSubmit={submitSearch}>
      <input
        className="w-100 p-2"
        type="search"
        placeholder="City Name..."
        onChange={(e) => setSearchBoxValue(e.target.value)}
        autoComplete="off"
        value={searchBoxValue}
        disabled={loading}
        list="datalistOptions"
        required
      />

      <datalist id="datalistOptions">
        <option value="San Francisco" />
        <option value="New York" />
        <option value="Chicago" />
        <option value="Seattle" />
        <option value="Los Angeles" />
      </datalist>
    </Form>
  );
};

export default SearchBox;
