// Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously
// using the fs module. The function should print the content to the console.

const fs = require('fs'); //import the filesystem module

function readFileContent(filePath) {
  // Using fs.readFile to read the file asynchronously
  fs.readFile(filePath, 'utf8', (err, data) => { 
    if (err) {
      // Handle any errors during file reading
      console.error(`Error reading file: ${err.message}`);
    } else {
      
      console.log('File Content:'+ data);
      
    }
  });
}

// Test cases
readFileContent('test-files/file1.txt');
// Expected Output: this is file1.txt

readFileContent('test-files/file2.txt');
// Expected Output: (empty string)

readFileContent('test-files/file3.txt');
// Expected Output: Error reading file: ENOENT: no such file or directory,  open 'test-files/file3.txt'


