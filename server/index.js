const express = require('express')

const app = express()

const port = 1455

app.get('/create-acc', (req, res) => {
    let username = req.query.username

    res.json({
        "success": "Account was created for user",
        "username": `@${username}`,
        "userid": `1`
    })
});

app.listen(port, () =>
    console.log(`Argon API listening on port ${port}!`),
);