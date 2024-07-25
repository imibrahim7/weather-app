import React from "react";

interface MainInfoProps {
  query: string;
  celsiusMainTemp: number;
  fahrenheitMainTemp: number;
  humidityVal: number;
  error: string | null;
  iconId: string | number | null;
  description: string;
  countryName: string;
  temperatureToggle: boolean;
}

const MainInfo: React.FC<MainInfoProps> = ({
  query,
  celsiusMainTemp,
  fahrenheitMainTemp,
  iconId,
  description,
  countryName,
  temperatureToggle,
}) => {
  console.log(celsiusMainTemp);
  return (
    <div className="flex items-center font-poppins">
      <div>
        <>
          <div className="text-[60px] text-white ml-[75px] p-5">
            {query.toUpperCase()}, {countryName}
          </div>
          <h1 className="text-[60px] text-white ml-[75px] p-5">
            {temperatureToggle
              ? `${celsiusMainTemp}°C`
              : `${fahrenheitMainTemp}°F`}
          </h1>
          <h1 className="translate-x-[30rem] translate-y-[-8rem] text-white text-[50px]">
            {description}
          </h1>
        </>
      </div>
      <div className="ml-[300px]">
        <img
          src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
          alt="weather-icon"
          className="w-[200px] h-[200px] text-[50px] text-white changeInLogo:hidden"
        />
      </div>
    </div>
  );
};

export default MainInfo;
