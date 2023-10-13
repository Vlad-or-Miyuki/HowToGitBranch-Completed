const seconds = 3661;
const hour_secs = 3600; // 1 hour is 3600 seconds;
const hour = 60; // minutes
const minute = 60; // seconds
const sec = 1; // 1 sec
const difference = seconds - hour_secs; // 3661 - 3600 = 61
const difference2 = difference - sec; // 61 - 1 = 60

const final_hour = hour_secs/hour/60
const final_minute = seconds - hour_secs - minute;
const final_sec = seconds - hour_secs - minute;
console.log(`Время: ${final_hour} ч ${final_minute} мин ${final_sec} сек`)
