class Card {
  // 기본 요소 설정
  constructor(temperature) {
    this.temperature = temperature;
  }

  create($element) {
    let $li = document.createElement("li");
    $li.classList.add("weather_card");
    $element.append($li);
  }
}

// 최종적으로 내보낼 함수 정의
const CreateCard = ($element) => {
  const card = new Card();
  const createCard = card.create;
  for (let i = 0; i < 4; i++) {
    createCard($element);
  }
};

export default CreateCard;
