const fs = require('fs');
const path = require('path');

const createFiles = (source) => {
    // console.log(__dirname);
    // console.log('user input:' + source);
    // The process.cwd() method returns the current working directory of the Node.js process.
    const currentDirectory = process.cwd();
    console.log(currentDirectory);
    const folderName = 'src';
    const fileName = 'workflow.json';  // Specify the filename with .json extension

    // Combine currentDirectory, folderName, and fileName to get the full path
    const filePath = path.join(currentDirectory, folderName, fileName);

    // JSON content to write to the file
    const jsonData = {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3',
        source: source
    };

    // Create the folder if it doesn't exist
    if (!fs.existsSync(path.join(currentDirectory, folderName))) {
        fs.mkdirSync(path.join(currentDirectory, folderName));
    }

    // Write the JSON content to the file with indentation for readability
    fs.writeFileSync(filePath, JSON.stringify(jsonData, null, 2), (err) => {
        if (err) {
            console.error('Error writing JSON file:', err);
        } else {
            console.log(`JSON file "${fileName}" has been created successfully at: ${filePath}`);
        }
    });
}

module.exports = { createFiles }
