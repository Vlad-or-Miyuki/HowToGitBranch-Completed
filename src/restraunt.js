const humans = 6;
const bill = 3000;
const tea = 500;
const endbill = bill + tea
const billpay = Math.floor(bill / humans)
console.log(`С каждого по ${billpay} рублей,при общем счёте ${endbill} рублей и чаевыми ${tea} рублей`)
