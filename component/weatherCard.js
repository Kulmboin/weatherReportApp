// import { apiKeyObj } from "../apiKey";
import { regionValue, setRegionValue } from "./component/state.js";

class WeatherCard {
  // 기본 요소 설정
  constructor($container) {
    this.container = $container;
  }

  createCard($element) {
    // let $li = document.createElement("li");
    // $li.classList.add("weather_card");
    // $element.append($li);

    console.log($element);

    // const a = this.$container;
  }

  getRegionArray() {
    // app 시작 혹은 검색어 입력이 없을시에 전체 행정구역 x,y 값을 리스트로 반환
    if (regionValue === null) {
    }

    // 검색 항목이 있다면 검색 행정구역에 대한 x,y 값을 찾은 후 반환
    if (regionValue !== null) {
    }
  }
}

export { WeatherCard };
