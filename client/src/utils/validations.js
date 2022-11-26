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

export { isEmpty, validateEmail, validatePassword };
