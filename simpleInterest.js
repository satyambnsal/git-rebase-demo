const { DEFAULT_INTEREST_RATE_IN_PERCENT } = require('./constants');

function simpleInterest(
  amount,
  timeInYears,
  interestRate = DEFAULT_INTEREST_RATE_IN_PERCENT
) {
  return (amount * timeInYears * interestRate) / 100;
}

module.exports = simpleInterest;
