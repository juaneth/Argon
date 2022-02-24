const express = require('express')
const password = require('generate-password')

// 'npm i' to install all packages

const fs = require('fs')

function log(content) {
    console.log(content)

    let prev = fs.readFileSync('log.txt', 'utf-8')
    fs.writeFileSync('log.txt', `${prev}\n${content}`)
}

function database(action, content) {
    // Save User to Database
    if (action == undefined || content == undefined) {
        log('Undefined action or content for Database')
    } else {
        if (action == "create-user") {
            // Create user in database, eg. save their username and generate a 64 bit key
        }

        if (action == "login") {
            // Find their key in database and verify them eg. read key and decrypt it and then check.
        }

        if (action == "invite") {
            // Generate their invite and minus 1 to the account generating the invite
        }
    }
}

// API Setup

const app = express()

const port = 1455

// Generate userid using uuid package and return it
function generateuserid() {
    const { v4: uuidv4 } = require('uuid');

    let userid = uuidv4()

    return userid
}

app.get('/create-acc', (req, res) => {
    let username = req.query.username

    // Generate user id
    const useridgenerated = generateuserid();

    // Create user in database
    database("create-user", username)

    // Respond with success
    res.json({
        "success": "Account was created for user",
        "username": `@${username}`,
        "userid": `${useridgenerated}`
    })
});

app.get('/create-inv', (req, res) => {
    let username = req.query.username

    // Generate invite key
    let passkey = password.generate({
        length: 24,
        numbers: false
    });

    res.json({
        "success": "Invite was created for user",
        "author": `@${username}`,
        "invite-key": `inv-${passkey}`
    })
});

app.get('/login', (req, res) => {
    let username = req.query.username
    let key = req.query.key

    let newkey = password.generate({
        length: 128,
        numbers: true,
    });

    database('login', `${username}--${key}`)

    res.json({
        "success": "Logged in",
        "username": `@${username}`,
        "new-key": `${newkey}`
    })
});

app.listen(port, () =>
    console.log(`Argon API listening on port ${port}! TEST: http://localhost:${port}/create-inv?username=TEST`), );