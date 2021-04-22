// let child = document.getElementById("Kodomo"); // 子要素を変数に代入
// let oya = child.parentNode; // 親要素を取得
// console.log(oya); // コンソールでみてみる

let child = document.getElementById("Kodomo"); // 子要素を変数に代入
let sosen = child.closest("#Sosen"); // 祖先要素を取得
console.log(sosen); // コンソールでみてみる