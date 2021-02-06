//node_moduelsはgitに挙げない
const fs = require('fs');

// jsは基本constを使う
const a = 1;
const b = 2;

console.log(add(a,b));

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