module.exports = function(Members) {

  Members.validatesLengthOf('password', {min: 5, message: {min: 'Password is too short'}});
  Members.validatesNumericalityOf('rank', {int: true});

};
