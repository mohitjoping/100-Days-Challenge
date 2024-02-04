// Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path 
//using the path module. 
// The function should print the resolved path to the console.

const path = require('path');

function resolvePath(relativePath) {
    // Assuming the starting directory is /Users/username
    const basePath = '/Users/mohitjoping';
    
    const absolutePath = path.resolve(basePath, relativePath);// Resolve the relative path to an absolute path

    console.log('Resolved Path:', absolutePath); // Print the resolved path to the console
}

// Test Cases
resolvePath('../Users/mohitjoping/mohit-joping/100-Days-Challenge/30-days-node.js/test-files/file1.txt');
resolvePath('Users/mohitjoping/mohit-joping/100-Days-Challenge/30-days-node.js/hero/file1.txt'); // hero is non-exitent folder 


