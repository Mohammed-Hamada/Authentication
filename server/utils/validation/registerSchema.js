const joi = require('joi');

const registerSchema = joi.object({
  username: joi.string()
    .min(3)
    .max(25)
    .required(),
  email: joi.string()
    .email()
    .min(8)
    .max(30)
    .required(),
  password: joi.string()
    .pattern(/^[a-zA-Z0-9]{4,100}$/)
    .required(),
});

module.exports = registerSchema;
