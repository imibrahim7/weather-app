import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import MainInfo from "./components/MainInfo";
import AirConditions from "./components/AirConditions";
import { Link, Route, Routes } from "react-router-dom";
import Settings from "./components/Settings";

const App = () => {
  const [weatherData, setWeatherData] = useState({
    query: "Lahore",
    celsiusMainTemp: 0,
    farhenheitMainTemp: 0,
    iconId: "",
    description: "",
    countryName: "",
    realFeel: 0,
    clouds: 0,
    hPaPressure: 0,
    inchesPressure: 0,
    kPaPressure: 0,
    milimemtersPressure: 0,
    humidityVal: 0,
    hPaGroundLevel: 0,
    inchesGroundLevel: 0,
    kPaGroundLevel: 0,
    milimemtersGroundLevel: 0,
    kilometersVisibility: 0,
    milesVisibility: 0,
    kmPerHourWindSpeed: 0,
    meterPerSecWindSpeed: 0,
    knotsWindSpeed: 0,
    windDirection: 0,
    celsiusMaxTemp: 0,
    farhenheitMaxTemp: 0,
    celsiusMinTemp: 0,
    farhenheitMinTemp: 0,
    longitude: 0,
    latitude: 0,
    currentTime: 0,
    sunrise: 0,
    sunset: 0,
    error: null,
    isLoading: false,
  });

  // -------------------------------
  const [temperatureToggle, setTemperatureToggle] = useState(() => {
    const savedTempToggle = localStorage.getItem("temperatureToggle");
    return savedTempToggle !== null ? JSON.parse(savedTempToggle) : true;
  });

  useEffect(() => {
    localStorage.setItem(
      "temperatureToggle",
      JSON.stringify(temperatureToggle)
    );
  }, [temperatureToggle]);

  const [windSpeedToggle, setWindSpeedToggle] = useState(() => {
    const savedWindSpeedToggle = localStorage.getItem("windSpeedToggle");
    return savedWindSpeedToggle !== null
      ? JSON.parse(savedWindSpeedToggle)
      : true;
  });

  useEffect(() => {
    localStorage.setItem("windSpeedToggle", JSON.stringify(windSpeedToggle));
  }, [windSpeedToggle]);

  const [pressureToggle, setPressureToggle] = useState(() => {
    const savedPressureToggle = localStorage.getItem("pressureToggle");
    return savedPressureToggle !== null
      ? JSON.parse(savedPressureToggle)
      : true;
  });

  useEffect(() => {
    localStorage.setItem("pressureToggle", JSON.stringify(pressureToggle));
  }, [pressureToggle]);

  const [distanceToggle, setDistanceToggle] = useState(() => {
    const savedDistanceToggle = localStorage.getItem("distanceToggle");
    return savedDistanceToggle !== null
      ? JSON.parse(savedDistanceToggle)
      : true;
  });

  useEffect(() => {
    localStorage.setItem("distanceToggle", JSON.stringify(distanceToggle));
  }, [distanceToggle]);

  const OPEN_WEATHER_API = process.env.REACT_APP_OPEN_WEATHER_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setWeatherData((prev) => ({ ...prev, isLoading: true }));
        const result = await fetch(
          `http://api.openweathermap.org/data/2.5/weather?q=${weatherData.query}&units=metric&appid=${OPEN_WEATHER_API}`
        );

        const json = await result.json();
        console.log(json);

        setWeatherData((prev) => ({
          ...prev,
          isLoading: false,
          celsiusMainTemp: Math.floor(json.main.temp),
          farhenheitMainTemp: Math.floor((json.main.temp * 9) / 5 + 32),
          humidityVal: json.main.humidity,
          realFeel: json.main.feels_like,
          kmPerHourWindSpeed: json.wind.speed,
          meterPerSecWindSpeed: json.wind.speed / 3.6,
          knotsWindSpeed: json.wind.speed / 1.852,
          windDirection: json.wind.deg,
          hPaPressure: json.main.pressure,
          inchesPressure: json.main.pressure * 0.02953,
          kPaPressure: json.main.pressure * 0.1,
          milimemtersPressure: json.main.pressure * 0.75006157584566,
          hPaGroundLevel: json.main.grnd_level,
          inchesGroundLevel: json.main.grnd_level * 0.02953,
          kPaGroundLevel: json.main.grnd_level * 0.1,
          milimemtersGroundLevel: json.main.grnd_level * 0.75006157584566,
          kilometersVisibility: json.visibility,
          milesVisibility: json.visibility / 1.609,
          description: json.weather[0].main,
          clouds: json.clouds.all,
          celsiusMaxTemp: Math.floor(json.main.temp_max),
          farhenheitMaxTemp: Math.floor(json.main.temp_max * 9) / 5 + 32,
          celsiusMinTemp: Math.floor(json.main.temp_min),
          farhenheitMinTemp: Math.floor(json.main.temp_min * 9) / 5 + 32,
          longitude: json.coord.lon,
          latitude: json.coord.lat,
          currentTime: json.dt,
          sunrise: json.sys.sunrise,
          sunset: json.sys.sunset,
          countryName: json.sys.country,
          error: null,
          iconId: json.weather[0].icon,
        }));
        console.log(weatherData.kmPerHourWindSpeed);
      } catch (err: any) {
        setWeatherData((prev) => ({
          ...prev,
          isLoading: false,
          error: err.message,
          celsiusMainTemp: 0,
          farhenheitMainTemp: 0,
          humidityVal: 0,
          realFeel: 0,
          kmPerHourWindSpeed: 0,
          meterPerSecWindSpeed: 0,
          knotsWindSpeed: 0,
          windDirection: 0,
          hPaPressure: 0,
          inchesPressure: 0,
          kPaPressure: 0,
          milimemtersPressure: 0,
          hPaGroundLevel: 0,
          inchesGroundLevel: 0,
          kPaGroundLevel: 0,
          milimemtersGroundLevel: 0,
          kilometersVisibility: 0,
          milesVisibility: 0,
          clouds: 0,
          celsiusMaxTemp: 0,
          farhenheitMaxTemp: 0,
          celsiusMinTemp: 0,
          farhenheitMinTemp: 0,
          longitude: 0,
          latitude: 0,
          currentTime: 0,
          sunrise: 0,
          sunset: 0,
          countryName: "",
          description: "N/A",
          iconId: "weather-icon",
          query: "Invalid City",
        }));
      }
    };
    fetchData();
  }, [weatherData.query, OPEN_WEATHER_API]);

  const setQuery = (newQuery: any) => {
    setWeatherData((prev) => ({ ...prev, query: newQuery }));
  };

  if (weatherData.isLoading) {
    return (
      <div
        role="status"
        className="bg-[#0b121e] flex justify-center items-center w-[210vh] h-[100vh]"
      >
        <svg
          aria-hidden="true"
          className="w-[100px] h-[100px] text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    );
  }

  return (
    <div className="bg-[#0b121e] h-full overflow-hidden changeInStyle:overflow-scroll ">
      <div className="">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="flex justify-end m-2">
                  <div>{weatherData.isLoading}</div>
                  <Link to="/settings" className="text-white absolute">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="40px"
                      viewBox="0 -960 960 960"
                      width="40px"
                      fill="#b9b6b0"
                    >
                      <path d="M416-100q-9 0-16.95-6.21-7.96-6.21-10.05-15.79l-12-97q-15-5-36.78-16.45Q318.44-246.91 305-260l-90 38q-9 4-18.5 1T183-233l-66-118q-4-9-3-17.5t9-13.5l76-58q-1-9.93-2.5-21t-1.5-21q0-8.41 1.5-18.5T199-524l-75-56q-8-5-8.5-14.5T119-613l65-112q4-8 13-11t18 0l85 35q17-14 38-25.5t39-18.5l12-95q1-10 9.5-16t17.5-6h128q9 0 17.5 6t9.5 16l11 97q21 9 38.5 18.5T656-700l89-36q8.72-4 17.94-.5T777-725l65 113q4 9 3 18t-9 14l-81 61q3 11 3.5 21t.5 18q0 7-1 17t-2 24l76 57q8 5 10 14t-2 18l-64 116q-4 9-14.33 12-10.34 3-19.67-1l-91-38q-17 14-33.5 24T583-221l-12 99q-2.09 9.58-10.05 15.79Q553-100 544-100H416Zm23-54h78.85L533-264q31-8 55.91-22.08Q613.83-300.17 641-326l98 42 41-68-86-66q5-18 7-33.23 2-15.23 2-30.5 0-16.27-1.5-29.27t-6.5-33l87-66-39-68-102 41q-17-20-49.39-38.79-32.4-18.8-59.61-24.21l-11-108h-83l-10 106q-34 7-61 22.5T314-637l-97-41-41 68 84 65q-5 17-7 33t-2 30.42q0 12.58 2 28.58 2 16 6 36l-83 65 41 68 97-41q28 26 54.5 40.5T427-262l12 108Zm36-212q48.6 0 82.3-33.7Q591-433.4 591-482q0-48.6-33.7-82.3Q523.6-598 475-598q-48 0-82 33.7T359-482q0 48.6 34 82.3 34 33.7 82 33.7Zm4-115Z" />
                    </svg>
                  </Link>
                </div>
              </>
            }
          />
          <Route
            path="/settings"
            element={
              <Settings
                temperatureToggle={temperatureToggle}
                setTemperatureToggle={setTemperatureToggle}
                windSpeedToggle={windSpeedToggle}
                setWindSpeedToggle={setWindSpeedToggle}
                pressureToggle={pressureToggle}
                setPressureToggle={setPressureToggle}
                distanceToggle={distanceToggle}
                setDistanceToggle={setDistanceToggle}
              />
            }
          />
        </Routes>
      </div>

      <div>{weatherData.isLoading}</div>
      <SearchBar setQuery={setQuery} />
      <MainInfo
        query={weatherData.query}
        celsiusMainTemp={weatherData.celsiusMainTemp}
        fahrenheitMainTemp={weatherData.farhenheitMainTemp}
        humidityVal={weatherData.humidityVal}
        error={weatherData.error}
        iconId={weatherData.iconId}
        description={weatherData.description}
        countryName={weatherData.countryName}
        temperatureToggle={temperatureToggle}
      />
      <AirConditions
        humidityVal={weatherData.humidityVal}
        realFeel={weatherData.realFeel}
        kmPerHourWindSpeed={weatherData.kmPerHourWindSpeed}
        meterPerSecWindSpeed={weatherData.meterPerSecWindSpeed}
        knotsWindSpeed={weatherData.knotsWindSpeed}
        hPaPressure={weatherData.hPaPressure}
        inchesPressure={weatherData.inchesPressure}
        kPaPressure={weatherData.kPaPressure}
        milimemtersPressure={weatherData.milimemtersPressure}
        hPaGroundLevel={weatherData.hPaGroundLevel}
        inchesGroundLevel={weatherData.inchesGroundLevel}
        kPaGroundLevel={weatherData.kPaGroundLevel}
        milimemtersGroundLevel={weatherData.milimemtersGroundLevel}
        kilometersVisibility={weatherData.kilometersVisibility}
        milesVisibility={weatherData.milesVisibility}
        clouds={weatherData.clouds}
        celsiusMaxTemp={weatherData.celsiusMaxTemp}
        farhenheitMaxTemp={weatherData.farhenheitMaxTemp}
        celsiusMinTemp={weatherData.celsiusMinTemp}
        farhenheitMinTemp={weatherData.farhenheitMinTemp}
        longitude={weatherData.longitude}
        latitude={weatherData.latitude}
        windDirection={weatherData.windDirection}
        currentTime={weatherData.currentTime}
        sunrise={weatherData.sunrise}
        sunset={weatherData.sunset}
        temperatureToggle={temperatureToggle}
        windSpeedToggle={windSpeedToggle}
        pressureToggle={pressureToggle}
        distanceToggle={distanceToggle}
      />
    </div>
  );
};

export default App;
