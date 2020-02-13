const db = require("../db/orm")

module.exports = db.define('path', {
      name : String,
      pathToFile: String
  });

