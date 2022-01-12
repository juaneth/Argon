const express = require('express')
const password = require('generate-password')

const fs = require('fs')

function log(content) {
    console.log(content)

    let prev = fs.readFileSync('log.txt', 'utf-8')
}

function database(action, content) {
    //Save User to Database
    if (action == undefined || content == undefined) {
        log('Undefined action or content for Database')
    } else {
        if (action == "create-user") {

        }

        if (action == "") {

        }
    }
}

const app = express()

const port = 1455

//generate userid with specified username
function generateuserid() {
    const { v4: uuidv4 } = require('uuid');

    let userid = uuidv4()

    return userid
}

app.get('/create-acc', (req, res) => {
    let username = req.query.username

    //generate a user id for account
    const useridgenerated = generateuserid();

    database("create-user", username)

    res.json({
        "success": "Account was created for user",
        "username": `@${username}`,
        "userid": `${useridgenerated}`
    })
});

app.get('/create-inv', (req, res) => {
    let username = req.query.username

    //Generate passkey
    let passkey = password.generate({
        length: 12,
        numbers: false
    });

    res.json({
        "success": "Invite was created for user",
        "author": `@${username}`,
        "invite-key": `inv - ${passkey}`
    })
});

app.listen(port, () =>
    console.log(`Argon API listening on port $ { port }!TEST: http: //localhost:${port}/create-acc?username=TEST`),
);