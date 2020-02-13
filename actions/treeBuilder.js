const folderReader = require('../helper/folderReader.js')
const sortManager = require('../helper/sortManager')
exports.build = (req, res) => {
  try {
    let filesStruct = folderReader(req.query.path, []);
    //let sortedArr = sortManager(filesStruct, req.query.path);
    res.send(filesStruct)
  }catch (error) {
    return res.send(error.message)
  }
};
