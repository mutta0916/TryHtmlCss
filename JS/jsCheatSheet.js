// コマンド：node jsCheatSheet.js で実行できます。

// コンソール出力
// シングルクォート・ダブルクォートどちらでもいいようです。
console.log('シングル焼肉クォート');
console.log("ダブルカレーライスクォート");

// コメントです。。。

// 変数定義
// let
// あんまつかわない。直後に値書き換えたりする系(ループ変数とか)だけ。
let val = "変数の使者むった";
console.log(val);

// 定数定義
// const  ←実際は変数として使うのはこっちが多いらしい
const val2 = "定数は１度設定すると値を変えられないよ！";
console.log(val2);

// テンプレートリテラル
let val3 = "テンプレートリテラル（変数）";
console.log(`めっちゃ便利、${val3}!`);
const val4 = "テンプレートリテラル（定数）";
console.log(`めっちゃ便利、${val4}!`);

// 比較演算子
const a = "ゆった";
const b = "ゆった";
const c = "むった";
if (a===b) {
    console.log("同じだよ！");
}

if (b!==c) {
    console.log("違うよ！");
}

// かつ、または
const a2 = "ゆった";
const b2 = "ゆった";
const c2 = "むった";
const d2 = "むった";
if (a2===b2 && c2===d2) {
    console.log("かつ &&");
}

if (a2===b2 || b2===d2) {
    console.log("または ||");
}

// switch文
const val5 = "たぴおか"
switch(val5) {
    case "たぴおか":
        console.log("たぴおか");
        break;
    case "タピオカ":
        console.log("タピオカ");
        break;
    default:
        console.log("該当なし");
        break;
}

// switch文 注意点！！
switch(val5) {
    case "たぴおか":
        console.log("breakがないと");
    case "タピオカ":
        console.log("後続のcaseも");
    default:
        console.log("全部実行されちゃいます(>_<)");
}

// while文
let val6 = 0
while(val6!==5) {
    console.log(`${val6}回目！`);
    val6++;
}

// for文
for (let number = 1; number<=10; number+=1) {
    console.log(`にょろにょろが${number}匹！`);
}

// 配列
// 慣習的に複数形で記述する。
const fams = ["ぱいのみ", "やどん", "ゆった", "にょろ", "むった"];
console.log(fams);

// オブジェクト
// 複数の値をまとめて管理するもの
const carry = {name: "カレーライス", memo: "おいしい"};
console.log(carry.name + carry.memo);

// 配列にオブジェクト
const foods = [{name:"カレーライス", price:300}, {name:"ラーメン", price:500}];
console.log(foods[1].name);

// forの中のコンスト
for (let number = 1; number<=10; number+=1) {
    // このコンストの記述は可能。１回ごとにリセットされる感じ。
    const val = number;
    console.log(`ぱいのみが${val}匹！`);
}

// undefined ← 配列に存在しない場合などに出現する
// 値が入っていなかったり
let val7;
if (val7 === undefined) {
    console.log("あんでぃふぁいんどーなつ");
}


