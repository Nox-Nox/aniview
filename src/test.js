var today = new Date();
var year = today.getFullYear();
var month = today.getMonth();
var day = today.getDate();
console.log(year, month, day, " ", today);

if (day >= 1 && month >= 2 && month <= 4) {
  console.log("spring");
} else if (day >= 1 && month >= 5 && month <= 7) {
  console.log("summer");
} else if (day >= 1 && month >= 8 && month <= 11) {
  console.log("fall");
} else {
  console.log("winter");
}
