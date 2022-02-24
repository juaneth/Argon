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

        let child = exec(``, (error, stdout, stderr) => {
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

        // Create logins folder for login info
        try {
            fs.mkdirSync('userdata/logins')
        } catch {
            console.log('./userdata and ./userdata/logins both already exist - Skipping')
        }

        // Write users.json to store user info
        try {
            fs.writeFileSync('userdata/users.json', '{}')
        } catch {
            console.log('./userdata/users.json already exists - Skipping')
        }

        try {
            fs.writeFileSync('userdata/invites.json', '{}')
        } catch {
            console.log('./userdata/invites.json already exists - Skipping')
        }
    } else {
        console.log('\n\nExiting...')
    }
})();