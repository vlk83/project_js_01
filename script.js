

let money = prompt('Your budget for the month?', '');
let time = prompt('Enter the date in the format YYYY-MM-DD', '');
let answer1 = prompt('Enter a mandatory expense item for this month', '');
let answer2 = prompt('How much will it cost?', '');

let appData = {
    budget: money,
    timeData: time,
    expenses: {
        answer1: answer2
    },
    optionalExpenses: {},
    income: [],
    savings: false
};

alert('budget for 1 day: ' + money/30);
