const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  throw new NotImplementedError('Not implemented');
  // if (!date || isNaN(date)) {
  //   return 'Unable to determine the time of year!';
  // }

  // const month = date.getMonth();
  // console.log(month);
  // if (month >= 0 && month <= 1 || month === 11) {
  //   return 'winter';
  // } else if (month >= 3 && month <= 5) {
  //   return 'spring';
  // } else if (month >= 6 && month <= 8) {
  //   return 'summer';
  // } else if (month >= 9 && month <= 11) {
  //   return 'autumn';
  // } else {
  //   throw new Error('Invalid date!');
  // }
}

//getSeason(new Date(2020, 2, 31));

module.exports = {
  getSeason
};
