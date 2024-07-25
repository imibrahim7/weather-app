import { Dispatch, SetStateAction } from "react";
import { Link, Route, Routes } from "react-router-dom";
import App from "../App";

interface SettingsProps {
  temperatureToggle: boolean;
  setTemperatureToggle: Dispatch<SetStateAction<boolean>>;
  windSpeedToggle: number;
  setWindSpeedToggle: Dispatch<SetStateAction<number>>;
  pressureToggle: number;
  setPressureToggle: Dispatch<SetStateAction<number>>;
  distanceToggle: boolean;
  setDistanceToggle: Dispatch<SetStateAction<boolean>>;
}

const Settings: React.FC<SettingsProps> = ({
  temperatureToggle,
  setTemperatureToggle,
  windSpeedToggle,
  setWindSpeedToggle,
  pressureToggle,
  setPressureToggle,
  distanceToggle,
  setDistanceToggle,
}) => {
  const toggleTemperatureUnit = () => {
    setTemperatureToggle(!temperatureToggle);
  };

  const handleDistanceToggle = () => {
    setDistanceToggle(!distanceToggle);
  };

  const handleWindSpeedToggle = (value: number) => {
    setWindSpeedToggle(value);
  };

  const handlePressureToggle = (val: number) => {
    setPressureToggle(val);
  };

  return (
    <>
      <div className="min-h-screen bg-[#0b121e]">
        <div className="p-5 flex justify-end ">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <div className="flex justify-end m-2">
                    <Link to="/" className="text-white absolute">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="40px"
                        viewBox="0 -960 960 960"
                        width="40px"
                        fill="#e8eaed"
                      >
                        <path d="M226.67-186.67h140v-246.66h226.66v246.66h140v-380L480-756.67l-253.33 190v380ZM160-120v-480l320-240 320 240v480H526.67v-246.67h-93.34V-120H160Zm320-352Z" />
                      </svg>
                    </Link>
                  </div>
                </>
              }
            />
            <Route path="/settings" element={<App />} />
          </Routes>
        </div>
        <div className="bg-[#0b121e] text-white flex flex-row justify-center">
          <div className="flex flex-col w-full max-w-7xl px-4">
            <h1 className="text-3xl xl:text-[30px] p-2">Units</h1>
            <div className="bg-[#202a3b] w-full pt-1 space-y-6 p-4 rounded-lg">
              <div>
                <h1 className="text-[#b5bfc9] text-xl xl:text-[20px] font-bold mt-3">
                  Temperature
                </h1>
                <div
                  className="shadow rounded-full bg-[#0b121e] h-11 mt-4 flex p-1 relative items-center cursor-pointer"
                  onClick={toggleTemperatureUnit}
                >
                  <div className="w-1/2 flex justify-center">
                    <button>Celsius</button>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <button>Fahrenheit</button>
                  </div>
                  <button
                    className={`elSwitch bg-[#2a374b] text-white flex items-center justify-center w-1/2 rounded-full h-9 transition-all duration-300 top-[4px] absolute ${
                      temperatureToggle ? "left-1" : "left-1/2"
                    }`}
                  >
                    {temperatureToggle ? "Celsius" : "Fahrenheit"}
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-[#b5bfc9] text-xl xl:text-[20px] font-bold mt-3">
                  Wind Speed
                </h1>
                <div className="shadow rounded-full bg-[#0b121e] h-11 mt-4 flex p-1 relative items-center cursor-pointer">
                  <div
                    className="w-1/3 flex justify-center"
                    onClick={() => handleWindSpeedToggle(0)}
                  >
                    <button>km/h</button>
                  </div>
                  <div
                    className="w-1/3 flex justify-center"
                    onClick={() => handleWindSpeedToggle(1)}
                  >
                    <button>m/s</button>
                  </div>
                  <div
                    className="w-1/3 flex justify-center"
                    onClick={() => handleWindSpeedToggle(2)}
                  >
                    <button>Knots</button>
                  </div>
                  <button
                    className={`elSwitch bg-[#2a374b] text-white flex items-center justify-center w-1/3 rounded-full h-9 transition-all duration-300 top-[4px] ml-1 absolute ${
                      windSpeedToggle === 0
                        ? "left-0"
                        : windSpeedToggle === 1
                        ? "left-1/3"
                        : "left-2/3"
                    }`}
                  >
                    {windSpeedToggle === 0
                      ? "km/h"
                      : windSpeedToggle === 1
                      ? "m/s"
                      : "Knots"}
                  </button>
                </div>
              </div>

              <div>
                <h1 className="text-[#b5bfc9] text-xl xl:text-[20px] font-bold mt-3">
                  Pressure
                </h1>
                <div className="shadow rounded-full bg-[#0b121e] h-11 mt-4 flex p-1 relative items-center cursor-pointer">
                  <div
                    className="w-1/4 flex justify-center"
                    onClick={() => handlePressureToggle(0)}
                  >
                    <button>hPa</button>
                  </div>
                  <div
                    className="w-1/4 flex justify-center"
                    onClick={() => handlePressureToggle(1)}
                  >
                    <button>Inches</button>
                  </div>
                  <div
                    className="w-1/4 flex justify-center"
                    onClick={() => handlePressureToggle(2)}
                  >
                    <button>kPa</button>
                  </div>
                  <div
                    className="w-1/4 flex justify-center"
                    onClick={() => handlePressureToggle(3)}
                  >
                    <button>mm</button>
                  </div>
                  <button
                    className={`elSwitch bg-[#2a374b] text-white flex items-center justify-center ml-1 w-1/4 rounded-full h-9 transition-all duration-300 top-[4px] absolute ${
                      pressureToggle === 0
                        ? "left-0"
                        : pressureToggle === 1
                        ? "left-1/4"
                        : pressureToggle === 2
                        ? "left-2/4"
                        : "left-3/4"
                    }`}
                  >
                    {pressureToggle === 0
                      ? "hPa"
                      : pressureToggle === 1
                      ? "Inches"
                      : pressureToggle === 2
                      ? "kPa"
                      : "mm"}
                  </button>
                </div>
              </div>
              <div>
                <h1 className="text-[#b5bfc9] text-xl xl:text-[20px] font-bold mt-3">
                  Distance
                </h1>
                <div
                  className="shadow rounded-full bg-[#0b121e] h-11 mt-4 flex p-1 relative items-center cursor-pointer"
                  onClick={handleDistanceToggle}
                >
                  <div className="w-1/2 flex justify-center">
                    <button>Kilometers</button>
                  </div>
                  <div className="w-1/2 flex justify-center">
                    <button>Miles</button>
                  </div>
                  <button
                    className={`elSwitch bg-[#2a374b] text-white flex items-center justify-center w-1/2 rounded-full h-9 transition-all duration-300 top-[4px] absolute ${
                      distanceToggle ? "left-1" : "left-1/2"
                    }`}
                  >
                    {distanceToggle ? "Kilometers" : "Miles"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
