import { readFile } from 'node:fs/promises';

const input = await readFile('input.txt', { encoding: 'utf8' })
const elfInvs = input.split(/\n\s*\n/)

let invTotals = []

elfInvs.forEach((invStr) => {
  const invArr = invStr.split(/\n/)
  const totalCals = Number(invArr.reduce((prev, curr) => Number(prev || 0) + Number(curr)))
  invTotals.push(totalCals)
});

invTotals.sort((a, b) => b - a)

console.log("Most Calories Carried:", invTotals[0])
console.log("Top three total:", invTotals[0] + invTotals[1] + invTotals[2])