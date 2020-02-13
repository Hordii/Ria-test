const express = require("express");
const router = express.Router();
const treeController = require("../controller/treeBuilderController")
const dbController = require("../controller/dbController")

var path = require('path');

router.get('/getFileStructure', treeController.build)
router.post('/pathSave', dbController.save)
router.get('/pathLoad', dbController.load)

router.get('/', (req, res)=>{
  res.render(path.resolve('src/html'))
})


module.exports = router;
