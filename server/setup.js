const fs = require('fs')

console.log('By running this script you agree to our terms of use defined here: https://github.com/juaneth/Argon and once script is run all userdata will be cleared if there were previously. \n\n')

const prompts = require('prompts');

(async() => {
    const response = await prompts({
        type: 'text',
        name: 'value',
        message: 'Y/N?',
    });

    if (response.value == 'y' || response.value == 'Y' || response.value == 'yes' || response.value == 'YES') {
        const { exec } = require("child_process");

        let child = exec(`npm i`, (error, stdout, stderr) => {
            if (error) {
                console.log(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                console.log(`stderr: ${stderr}`);
                return;
            }

            console.log(`stdout: ${stdout}`);
        });
    } else {
        console.log('\n\nExiting...')
    }
})();