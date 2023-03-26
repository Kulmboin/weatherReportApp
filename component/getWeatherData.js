import { apiKeyObj } from "../apiKey";

class CardData {
  // 지역 날씨 카드 기본 생성 정보
  constructor($container) {
    this.apiKey = apiKeyObj;

    // state -> state.js 의 region 데이터로 변경 하기 현재의 state.value 는 임시
    this.regionValue = state.value;
  }

  getData() {}
}
