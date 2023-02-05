const WeatherImage = ({ data }) => {
  return (
    <>
      <img
        className="place-self-center rounded-xl drop-shadow-imageShadow dark:drop-shadow-none"
        height="128"
        width="128"
        src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`}
        alt={data.weather[0].description}
      />
      <p className="first-letter:uppercase">{data.weather[0].description}</p>
    </>
  );
};

export default WeatherImage;
