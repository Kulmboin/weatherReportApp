import CreateCard from "./component/weatherCard.js";
import { regionValue, setRegionValue } from "./component/state.js";
import { apiKeyObj } from "./apiKey.js";
// import

const $element = document.querySelector(".weather_day_box");

CreateCard($element);

//   자바스크립트로 추가하기

//   <li class="weather_card">
//     <div class="dayInfo_section">
//       <span class="day_data">월</span>
//       <span class="date_data"></span>
//     </div>
//     <div class="morning_section"></div>
//     <div class="afternoon_section"></div>
//   </li>

const TestApiCall = async () => {
  const serviceKey = apiKeyObj.shortWeatherAPI;
  const numOfRows = "10";
  const base_date = "20230314";
  let result;

  try {
    const response = await axios.get(
      `http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=${serviceKey}&pageNo=1&numOfRows=10&dataType=JSON&base_date=${base_date}&base_time=2000&nx=55&ny=127`
    );
    const data = response.data;
    const resultData = data.response.body.items.item;
    // console.log(resultData);
    result = resultData;
    console.log(result);
    return result;
  } catch (err) {
    console.log(err);
  }

  // return result;
};

let print = TestApiCall();
console.log(print);
