// back-btnというidを持つHTML要素を取得し、定数に代入する
const pageTopBtn = document.getElementById('page_top_btn');

window.addEventListener('scroll', () => {
  const scrollValue = document.scrollingElement.scrollTop;
  // 画面のスクロール量が300px以上であれば、処理を実行する
  if (scrollValue >= 300) {
    pageTopBtn.classList.remove('hide');
  } else {
    pageTopBtn.classList.add('hide');
  }
});