function isEmpty(input) {
  return input.trim() !== "";
}

function validateEmail(input) {
  const validRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return input.match(validRegex);
}

function validatePassword(input) {
  const validRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
  return input.match(validRegex);
}

function comparePassword(pass, passConf) {
  return pass === passConf;
}

function minLength(word, char) {
  return word.length > char;
}

function validateTime(time) {
  const timeReg = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/;
  return time.match(timeReg);
}

export {
  isEmpty,
  validateEmail,
  validatePassword,
  comparePassword,
  minLength,
  validateTime,
};
