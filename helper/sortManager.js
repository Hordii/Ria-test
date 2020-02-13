const fs = require('fs');
let testArr = [{"parent":"/home/bogdan/Public/Task/helper/test","name":"level1_Directory","type":"folder"},{"parent":"/home/bogdan/Public/Task/helper/test/level1_Directory","name":"level_2_Directory","type":"folder"},{"parent":"/home/bogdan/Public/Task/helper/test/level1_Directory/level_2_Directory","name":"level_3_Directory","type":"folder"},{"parent":"/home/bogdan/Public/Task/helper/test/level1_Directory/level_2_Directory/level_3_Directory","name":"level_4_File","type":"file"},{"parent":"/home/bogdan/Public/Task/helper/test/level1_Directory/level_2_Directory","name":"level_3_File","type":"file"},{"parent":"/home/bogdan/Public/Task/helper/test/level1_Directory","name":"level_2_File","type":"file"},{"parent":"/home/bogdan/Public/Task/helper/test","name":"level_1_1_Directory","type":"folder"},{"parent":"/home/bogdan/Public/Task/helper/test/level_1_1_Directory","name":"level_22_File","type":"file"},{"parent":"/home/bogdan/Public/Task/helper/test/level_1_1_Directory","name":"level_2_2_File","type":"file"},{"parent":"/home/bogdan/Public/Task/helper/test/level_1_1_Directory","name":"level_2_2_irectory","type":"folder"},{"parent":"/home/bogdan/Public/Task/helper/test/level_1_1_Directory/level_2_2_irectory","name":"level_3_3_Directory","type":"folder"},{"parent":"/home/bogdan/Public/Task/helper/test/level_1_1_Directory/level_2_2_irectory","name":"level_3_3_File","type":"file"},{"parent":"/home/bogdan/Public/Task/helper/test","name":"level_1_file","type":"file"}]
let testRoot = "/home/bogdan/Public/Task/helper/test"
sort(testArr, testRoot);
function sort(unsortedArr, root) {
    try {
        unsortedArr.filter( item => {

        })


    }catch (e) {
        console.log(e)
    }
};
