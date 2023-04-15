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
  if (!date || isNaN(date)) {
    return 'Unable to determine the time of year!';
  }

  const month = date.getMonth();
  if (month >= 3 && month <= 5) {
    return 'spring';
  } else if (month >= 6 && month <= 8) {
    return 'summer';
  } else if (month >= 9 && month <= 11) {
    return 'autumn';
  } else if (month >= 0 && month <= 1 || month === 11) {
    return 'winter';
  } else {
    throw new Error('Invalid date!');
  }
}
module.exports = {
  getSeason
};
