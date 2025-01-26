let num = 30;
let calc3 = num % 3;
let calc5 = num % 5;
if (calc3 === 0 && calc5 === 0) {
  console.log("3と5の倍数です");
} else if (calc3 === 0 && calc5 !== 0) {
  console.log("3の倍数です");
} else if (calc3 !== 0 && calc5 === 0) {
  console.log("5の倍数です");
} else {
  console.log(num);
}
