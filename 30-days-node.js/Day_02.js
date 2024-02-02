const fs = require('fs'); // fs module

function writeToFile(filePath, content) {
  // Using fs.writeFile to write content in the file
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error :(  ${err.message}`);
    } else {
      console.log(`Hey👋, I am here in file1.txt 😃`);
    }
  });
}

// Test cases

writeToFile('test-files/file1.txt', 'Sample content.');
// Expected Output: Hey👋, I am here in file1.txt 😃

writeToFile('test-files/Folder-A/file1.txt', 'lets see the output');
// Expected Output: Error :(   ENOENT: no such file or directory,open 'test-files/Folder-A/file1.txt'



