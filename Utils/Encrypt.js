const bcrypt = require("bcrypt");
const saltRound = 5;

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRound);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

const comparePassword = (password, hash) => {
  const flag = bcrypt.compareSync(password, hash);
  return flag;
};

// var hashed = encryptPassword("1234567");
// console.log(hashed);

module.exports = {
  encryptPassword,
  comparePassword,
};
