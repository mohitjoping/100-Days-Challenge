// Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module.
// The function should print the output of the command to the console.

const { spawnSync } = require('child_process');

function executeCommand(command) {
    
    const result = spawnSync(command, { shell: true, encoding: 'utf-8' }); //spawnSync is used for simplicty

    //Error handling
    if (result.error) {
        console.error(`Error executing command: ${result.error.message}`);
        return;
    }

  
    console.log(`Command Output:\n${result.stdout}`);
}

// Test Cases
executeCommand('ls -la'); //this cmd basically used for detailed informatioin about a file or directories in a specific directory
executeCommand('echo "Hello, Node.js!"');



