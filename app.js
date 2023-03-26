import { WeatherCard } from "./component/weatherCard.js";
import { regionValue, setRegionValue } from "./component/state.js";
// import

console.log("test");

const card = ($container) => {
  new WeatherCard($container);
};

card(document.querySelector(".weather_day_box"));

// const openload = window.onload;
// window.onload
// CreateCard($element);

// const TestApiCall = async () => {
//   const serviceKey = apiKeyObj.shortWeatherAPI;
//   const numOfRows = "10";
//   const base_date = "20230321";
//   let result;

//   try {
//     const response = await axios.get(
//       `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${base_date}&base_time=2000&nx=55&ny=127`
//     );
//     const data = response.data;
//     const resultData = data.response.body.items.item[0].category;
//     // console.log(resultData);
//     result = resultData;
//     console.log(result);
//     return result;
//   } catch (err) {
//     console.log(err);
//   }

//   // return result;
// };

// let print = TestApiCall();
// console.log(print);
