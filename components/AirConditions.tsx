interface AirConditionsProps {
  realFeel: number;
  kmPerHourWindSpeed: number;
  meterPerSecWindSpeed: number;
  knotsWindSpeed: number;
  hPaPressure: number;
  inchesPressure: number;
  kPaPressure: number;
  milimemtersPressure: number;
  humidityVal: number;
  hPaGroundLevel: number;
  inchesGroundLevel: number;
  kPaGroundLevel: number;
  milimemtersGroundLevel: number;
  kilometersVisibility: number;
  milesVisibility: number;
  clouds: number;
  celsiusMaxTemp: number;
  celsiusMinTemp: number;
  farhenheitMaxTemp: number;
  farhenheitMinTemp: number;
  longitude: number;
  latitude: number;
  windDirection: number;
  currentTime: number;
  sunrise: number;
  sunset: number;
  temperatureToggle: boolean;
  windSpeedToggle: number;
  pressureToggle: number;
  distanceToggle: boolean;
}

const AirConditions: React.FC<AirConditionsProps> = ({
  realFeel,
  kmPerHourWindSpeed,
  meterPerSecWindSpeed,
  knotsWindSpeed,
  humidityVal,
  hPaPressure,
  inchesPressure,
  kPaPressure,
  milimemtersPressure,
  hPaGroundLevel,
  inchesGroundLevel,
  kPaGroundLevel,
  milimemtersGroundLevel,
  kilometersVisibility,
  milesVisibility,
  clouds,
  celsiusMaxTemp,
  celsiusMinTemp,
  farhenheitMaxTemp,
  farhenheitMinTemp,
  longitude,
  latitude,
  windDirection,
  sunrise,
  sunset,
  temperatureToggle,
  windSpeedToggle,
  pressureToggle,
  distanceToggle,
}) => {
  let date = new Date().toLocaleDateString();

  const sunsetInUnix = sunset;
  const sunsetConvert = new Date(sunsetInUnix * 1000);
  const sunsetInLocal = sunsetConvert.toLocaleTimeString();

  const sunriseInUnix = sunrise;
  const sunriseConvert = new Date(sunriseInUnix * 1000);
  const sunriseInLocal = sunriseConvert.toLocaleTimeString();

  const visibilityInKm = kilometersVisibility / 1000;

  return (
    <>
      <div className="changeInStyle:ml-[150px] changeInPosition:ml-0 changeInStyle:justify-center ml-5">
        <div className="flex gap-6 changeInLogo:text-lg changeInStyle:flex-col">
          <div className="bg-[#202a3b] w-full lg:w-[650px] h-[310px] rounded-2xl p-7 changeInStyle:justify-center flex flex-col">
            <p className="text-xl font-semibold text-white mb-4">
              AIR CONDITIONS
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[61px] justify-center flex-grow">
              <span>
                <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                  Real Feel
                </p>
                <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                  {realFeel}°
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                  Clouds
                </p>
                <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                  {clouds}%
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[19px] font-bold changeInLogo:text-[18px]">
                  Pressure
                </p>
                <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                  {pressureToggle === 0
                    ? `${hPaPressure} hPa`
                    : pressureToggle === 1
                    ? `${inchesPressure.toFixed(2)} in`
                    : pressureToggle === 2
                    ? `${kPaPressure.toFixed(2)} kPa`
                    : `${milimemtersPressure.toFixed(1)} mm`}
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                  Humidity
                </p>
                <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                  {humidityVal}%
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[19px] font-bold changeInLogo:text-[15px]">
                  Ground Level
                </p>
                <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[25px]">
                  {pressureToggle === 0
                    ? `${hPaGroundLevel} hPa`
                    : pressureToggle === 1
                    ? `${inchesGroundLevel.toFixed(2)} in`
                    : pressureToggle === 2
                    ? `${kPaGroundLevel.toFixed(2)} kPa`
                    : `${milimemtersGroundLevel.toFixed(1)} mm`}
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                  Visibility
                </p>
                <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                  {distanceToggle
                    ? `${visibilityInKm} km`
                    : `${milesVisibility.toFixed(0)} mi`}
                </p>
              </span>
            </div>
          </div>

          <div className="flex flex-row gap-5 changeInStyle:flex">
            <div className="bg-[#202a3b] w-full lg:w-[250px] h-[310px] rounded-2xl p-7 ">
              <p className="text-xl font-semibold text-white mb-4 ">Wind</p>
              <div className="grid grid-cols-1 gap-[61px] justify-center">
                <span>
                  <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                    Speed
                  </p>
                  <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                    {windSpeedToggle === 0
                      ? `${kmPerHourWindSpeed} km/h`
                      : windSpeedToggle === 1
                      ? `${meterPerSecWindSpeed.toFixed(2)} m/s`
                      : `${knotsWindSpeed.toFixed(2)} knots`}
                  </p>
                </span>
                <span>
                  <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                    Direction
                  </p>
                  <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                    {windDirection}°
                  </p>
                </span>
              </div>
            </div>

            <div className="bg-[#202a3b] w-full lg:w-[250px] h-[310px] rounded-2xl p-7">
              <p className="text-xl font-semibold text-white mb-4">
                Temp Details
              </p>
              <div className="grid grid-cols-1 gap-[61px] justify-center">
                <span>
                  <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                    Max Temp
                  </p>
                  <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                    {temperatureToggle
                      ? `${celsiusMaxTemp}°C`
                      : `${farhenheitMaxTemp}°F`}
                  </p>
                </span>
                <span>
                  <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                    Min Temp
                  </p>
                  <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                    {temperatureToggle
                      ? `${celsiusMinTemp}°C`
                      : `${farhenheitMinTemp}°F`}
                  </p>
                </span>
              </div>
            </div>

            <div className="bg-[#202a3b] w-full lg:w-[250px] h-[310px] rounded-2xl p-7">
              <p className="text-xl font-semibold text-white mb-4">
                Coordinates
              </p>
              <div className="grid grid-cols-1 gap-[61px] justify-center">
                <span>
                  <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                    Latitude
                  </p>
                  <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                    {latitude}°
                  </p>
                </span>
                <span>
                  <p className="text-[#687480] text-[20px] font-bold changeInLogo:text-[18px]">
                    Longitude
                  </p>
                  <p className="text-[#bfc8d5] text-[30px] font-extrabold changeInLogo:text-[28px]">
                    {longitude}°
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end top-[-40rem] mr-[3.2rem] relative  changeInLogo:justify-start changeInLogo:top-[0px] changeInStyle:mr-[0rem]">
          <div className="bg-[#202a3b] w-full max-w-[400px] h-auto rounded-2xl p-7 mx-auto my-6 md:mx-0">
            <p className="text-xl font-semibold text-white mb-4">Time</p>
            <div className="grid grid-cols-2 gap-4 md:gap-[35px] justify-center">
              <span>
                <p className="text-[#687480] text-[20px] font-bold">
                  Today's Date
                </p>
                <p className="text-[#bfc8d5] text-[26px] font-extrabold">
                  {date}
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[20px] font-bold">Sunrise</p>
                <p className="text-[#bfc8d5] text-[26px] font-extrabold">
                  {sunriseInLocal}
                </p>
              </span>
              <span>
                <p className="text-[#687480] text-[20px] font-bold">Sunset</p>
                <p className="text-[#bfc8d5] text-[25px] font-extrabold">
                  {sunsetInLocal}
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AirConditions;
