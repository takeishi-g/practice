type ResultsPropsType = {
  results: {
    country: string;
    cityName: string;
    temperature: string;
    conditionText: string;
    icon: string;
  };
};
const Results = ({results}: ResultsPropsType) => {
  const { country, cityName, temperature, conditionText, icon } =results;
  return (
    <div>
      {country && <div className="results-country">{country}</div>}
      {cityName && <div className="cityName">{cityName}</div>}
      {temperature && (
        <div className="results_temp">
          {temperature}
          <span>℃</span>
        </div>
      )}
      {conditionText && (
        <div className="results-condition">
          <img src={icon} alt="icon" />
          <span>{conditionText}</span>
        </div>
      )}
    </div>
  )
};

export default Results;
