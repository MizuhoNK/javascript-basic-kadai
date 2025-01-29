//本日の日付を取得
const today = new Date();
//本日の日付の年を取得
const todayYear = today.getFullYear();
//本日の日付の月を取得
//戻り値が0～11なので1を足す
const todayMonth = today.getMonth() + 1;
//本日の日付の日を取得
const todayDay = today.getDate();
//本日の日付を「〇年〇月〇日」で表示する
console.log(todayYear + "年" + todayMonth + "月" + todayDay + "日");
