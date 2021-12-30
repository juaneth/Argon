const express = require('express')

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

    res.json({
        "success": "Account was created for user",
        "username": `@${username}`,
        "userid": `${useridgenerated}`
    })
});

app.listen(port, () =>
    console.log(`Argon API listening on port ${port}!`),
);