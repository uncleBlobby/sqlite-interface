export const readDir = {
    readDir: function(dirName) {
        console.log(`reading directory ${dirName}`)
        const fs = require('fs');
        const path = require('path');
        const directoryPath = path.join(__dirname, dirName);
        fs.readdir(directoryPath, (err, files) => {
            if (err) {
                return console.log('Unable to scan directory: ' + err);
            }
            files.forEach((file) => {
                console.log(file);
            });
        });
    }
}