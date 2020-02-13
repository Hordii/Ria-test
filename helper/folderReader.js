const fs = require('fs');

module.exports = function read(path, arr) {
  try {
      let files = fs.readdirSync(path);
      for(let i =0; i<files.length; i++){
          let stats = fs.statSync(path + '/' + files[i])
            if(!stats.isDirectory()){
               arr.push({
                 parent : path  ,
                 name: files[i],
                 type: "file",
                  })
            } else{
              arr.push({
                parent : path,
                name: files[i],
                type: "folder",
               });
               read(path + '/' + files[i], arr);
            }

      }
      return arr;
  }catch (err) {
      return {msg: `no such file or directory, scandir ${path}`}
  }
};
