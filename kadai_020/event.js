//textというidを取得し、定数に代入する
const clickText = document.getElementById("text");
//btnというidを取得し、定数に代入する
const clickBtn = document.getElementById("btn");

//ボタンをクリックされたときにイベント処理を実行する
clickBtn.addEventListener("click", () => {
  //テキストの文字列を変更する
  clickText.textContent = "ボタンをクリックしました";
});
