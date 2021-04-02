//node_moduelsはgitに挙げない
//npm run コマンド名で自分が作成したコマンドを実行できる。
const fs = require('fs');

// jsは基本constを使う
const a = 1;
const b = 2;

//console.log(add(a,b));

function add(a,b){
    return a + b;
}

module.exports.add = add;

function readJson(path){
    const json = fs.readFileSync(path)
    const obj = JSON.parse(json);
    console.log(obj.name);
    return obj;
}

module.exports.readJson = readJson;

function readFile(path){
    fs.readFile(path, (err, data) => {
        if (err) throw err;
        console.log(data);
        const obj = JSON.parse(data);
        console.log(obj.name);
        return obj;
    });
}

module.exports.readFile = readFile;

//console.log('ファイルよむよー(/ω＼)');
//readFile("test.json");
//readJson("test.json");
//console.log('ファイルよんだよー(^^)/');

// var sample = new Promise(function(resolve, reject) {
//     setTimeout(function() {
//         resolve("むた");
//     }, 1000);
// });

const sample1 = () => "むった！";
console.log(sample1());
console.log("包まれてないむった");
const sample2 = () => Promise.resolve("包まれたむった！");
console.log(sample2());
sample2()
 .then((value) => {
    console.log('value: ' + value);
    return Promise.resolve(`${value}大先生`);
 })
 .then((value) => {
    console.log('value: ' + value);
    return `${value}大先生`;
 })
console.log("包まれたあとのむった");

// sample.then((value) => {
//     console.log(value);
//     console.log("Promise成功!");
// });

// console.log("先に出力");