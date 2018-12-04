'use strict';
let str = 'урок-3-был слишком легким';
str = str[0].toUpperCase() + str.slice(1);
document.write(str);

str = str.replace(new RegExp("-", "g"), ' ');
document.write(`<br>${str}`);


str = str.split(' ').pop();
str = str.replace("им", "оо");
document.write(`<br>${str}`);

let arr = [20, 33, 1, "Человек", 2, 3];
let res = 0;
arr.forEach(function (i) {
  if (!isNaN(i)) {
    res = res + (i ** 3);
  }
});
document.write(`<br>${Math.sqrt(res)}`);


let strNew = ' 111111111111111111111111111111111111111111111111111 '; //51 symbol + 2 space befor & after str
function some(i) {
  if (typeof (i) !== 'string') {
    alert('аргумен не строка');
  } else {
    strNew = i.trim();
    let str = strNew.slice(0, 50);
    if (str.length < strNew.length) {
      return document.write(`<br>${str += "..."}`);
    }
  }
}
console.log(some(strNew));