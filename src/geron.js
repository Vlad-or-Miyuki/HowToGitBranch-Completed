const a = 3; //сторона a и длинна
const b = 4; //сторона b
const c = 5; //сторона c и ширина
var p = a+b+c / 2;

const S = Math.sqrt(p*(p-a)*(p-b)*(p-c))
console.log('Площадь треугольника по формуле Герона',S.toFixed(0),'квадратных сантиметров');

