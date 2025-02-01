//btnというidを取得し、定数に代入する
const btn = document.getElementById("btn");
//textというidを取得し、定数に代入する
const text = document.getElementById("text");

//ボタンをクリックされたときにイベント処理を実行する
btn.addEventListener("click", () => {
  //2秒後に処理を実行する
  setTimeout(() => {
    //テキストの文字列を変更する
    text.textContent = "ボタンをクリックしました";
  }, 2000);
});
