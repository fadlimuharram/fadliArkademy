const hasLowerCase = str => {
  return /[a-z]/.test(str);
};

const hasUpperCase = str => {
  return /[A-Z]/.test(str);
};

const hasNumber = str => {
  return /[0-9]/.test(str);
};

const hasSpecialChar = str => {
  return /[!@#_$%^&*(),.?":{}|<>]/.test(str);
};

const isPasswordValid = password => {
  if (password.length < 8) return false;

  if (!hasLowerCase(password)) return false;

  if (!hasUpperCase(password)) return false;

  if (!hasSpecialChar(password)) return false;

  return true;
};

console.log("-------------------------NO 2-------------------------");
console.log(`1. 123Qwer_ : ${isPasswordValid("123Qwer_")}`);
console.log(`2. 123qwer_ : ${isPasswordValid("123qwer_")}`);
console.log(`3. ssdga_A7 : ${isPasswordValid("ssdga_A7")}`);
console.log(`4. SUper&&4 : ${isPasswordValid("SUper&&4")}`);
