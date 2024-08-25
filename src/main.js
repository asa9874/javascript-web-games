import './styles/style.css'
import $ from 'jquery'

$('.headerimg').attr('src',"./src/assets/1 (1).png")



// 카드 반복 횟수
const cardCount = 10;

// maincontent를 선택
const mainContent = $('.maincontent');

for (let i = 1; i <= cardCount; i++) {
  const cardHTML = `
    <div class="col">
        <div class="card">
            <img src="./src/assets/1 (1).png" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title ${i}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
  `;

  // mainContent에 삽입
  mainContent.find('.row').append(cardHTML);
}