/** Exercise 01 - Coins **/

const calculateChange = (input) => {
  // Add your code here
  if (input > 10) {
    return `${input} ==> Error: the number is too large`;
  }

  let dollar = Math.floor(input);
  let quarter = Math.floor((input % 1) / 0.25);
  let dime = Math.floor(((input % 1) % 0.25) / 0.1);
  let nickel = Math.floor((((input % 1) % 0.25) % 0.1) / 0.05);
  let penny = Math.round(((((input % 1) % 0.25) % 0.1) % 0.05) / 0.01);

  return (
    `${input} ==> ` +
    `${dollar ? `${dollar} dollar` + checkSingular('dollar', dollar) : ''}` +
    `${
      quarter ? `${quarter} quarter` + checkSingular('quarter', quarter) : ''
    }` +
    `${dime ? `${dime} dime` + checkSingular('dime', dime) : ''}` +
    `${nickel ? `${nickel} nickel` + checkSingular('nickel', nickel) : ''}` +
    `${penny ? `${penny} penn` + checkSingular('penny', penny) : ''}`
  );

  // added a function to check for singular to avoid nested ternary
  function checkSingular(coin, amount) {
    switch (coin) {
      case 'penny':
        return amount === 1 ? 'y' : 'ies';
      default:
        return amount === 1 ? ', ' : 's, ';
    }
  }
};

// Sample Test Cases
console.log(calculateChange(4.62));
// $4.62 ==> 4 dollars, 2 quarters, 1 dime, 2 pennies
console.log(calculateChange(9.74));
// $9.74 ==> 9 dollars, 2 quarters, 2 dimes, 4 pennies
console.log(calculateChange(0.16));
// $0.16 ==> 1 dime, 1 nickel, 1 penny
console.log(calculateChange(15.11));
// $15.11 ==> Error: the number is too large
