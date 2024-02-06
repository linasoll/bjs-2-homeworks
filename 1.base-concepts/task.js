"use strict"

function solveEquation(a, b, c) {
  let d = b ** 2 - 4 * a * c;
  let arr = [];
  let x;
  let y;
  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    x = -b/(2*a);
    arr.push(x);
  } else if (d > 0) {
    x = (-b + Math.sqrt(d) )/(2*a);
    y = (-b - Math.sqrt(d) )/(2*a);
    arr.push(x,y);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100 / 12;
  let s = amount - contribution;
  let payment = s * (p + (p / (((1 + p) ** countMonths) - 1)));
  let sum = Number((payment * countMonths).toFixed(2));
  return sum;
}