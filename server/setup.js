const fs = require('fs')

//Create logins folder for login info
fs.mkdirSync('userdata/logins')

//Write users.json to store user info
fs.writeFileSync('userdata/users.json', '{}')