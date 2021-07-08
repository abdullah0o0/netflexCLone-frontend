const { check, validationResult } = require("express-validator");

let userVS = [
  check("email").isEmail().normalizeEmail().withMessage("email invalid syntax"),
  check("password")
    .isLength({ min: 3 })
    .withMessage("password is too short, minimum 3 characters"),
  (req, res, next) => {
    console.log("i am last in validation");
    const result = validationResult(req);
    if (result.isEmpty()) {
      next();
    } else {
      let errorObject = result.errors.reduce((acc, item) => {
        acc.message = { ...acc.message, [item.param]: item.msg };
        return acc;
      }, {});
      errorObject.status = 400;
      console.log(errorObject);
      next(errorObject);
    }
  },
];

module.exports = { userVS };
