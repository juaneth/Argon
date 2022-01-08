const { exec } = require("child_process");
const fs = require('fs');
const adm_zip = require('adm-zip')

let child = exec(`npx electron-packager . Argon --all --icon "src/icon" --overwrite --out "out"`, (error, stdout, stderr) => {
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

child.on('close', function() {
    console.log(' -------- Build Complete, Packaging... --------\n');

    fs.readdirSync('./out').forEach(file => {
        console.log(`Platform: ${file}`)

        if (file == '.DS_Store') {
            console.log(`${file} Ignored, -> .DS_Store`)
        } else {
            let zip = new adm_zip();

            zip.addLocalFolder(`./out/${file}`);

            zip.writeZip(`./release/${file}.zip`);
        }
    });
});