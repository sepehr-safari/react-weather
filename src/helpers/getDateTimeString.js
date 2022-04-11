const getDateTimeString = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const weekday = (dayNumber) => {
    const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return weekDays[dayNumber];
  };

  const monthName = (monthNumber) => {
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return monthNames[monthNumber];
  };

  return `${date.getHours()}:${date.getMinutes()} - ${weekday(date.getDay())}, ${date.getDate()} ${monthName(
    date.getMonth()
  )} ${date.getFullYear()}`;
};

export default getDateTimeString;
