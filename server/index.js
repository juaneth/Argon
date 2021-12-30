const express = require('express')

const app = express()

const port = 1455

//generate userid with specified username
function generateuserid(username) {
    const uuid = require('uuid')

}

app.get('/create-acc', (req, res) => {
    let username = req.query.username

    //generate a user id for account name
    generateuserid(username);

    let userid =

        res.json({
            "success": "Account was created for user",
            "username": `@${username}`,
            "userid": `1`
        })
});

app.listen(port, () =>
    console.log(`Argon API listening on port ${port}!`),
);