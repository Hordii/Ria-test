const dbConf = require("./dbConf")
const orm = require("orm");

module.exports = orm.connect(`mysql://${dbConf.USER}:${dbConf.PASSWORD}@${dbConf.HOST}/${dbConf.DB}`,  (err, db) => {
  if (err) {
  console.log(err);
} else{
  console.log('Connected to DB')
}
return  db;
});
