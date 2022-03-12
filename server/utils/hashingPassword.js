const bcrypt = require('bcryptjs');

const hashingPassword = (password) => bcrypt.hash(password, 10);

module.exports = hashingPassword;
