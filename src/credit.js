const credit = 200000;
const bet = 0.1;
console.log('Сумма кредита:',credit);
const year_pay = credit * bet;
const result = year_pay + credit;
console.log('Конец года:',result);
//
const credit2 = 220000;
const bet2 = 0.1;
const year_pay2 = credit2 * bet2;
const result2 = year_pay2 + credit2;
console.log("Конец 2 года:",result2);
//
const overpay = result2 - credit;
console.log('Переплата:',overpay);
