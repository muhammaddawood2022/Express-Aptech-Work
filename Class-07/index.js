const express = require('express');
const app = express()
const port = 3000

const users = require("./userapi.json");

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
  res.json(users);
})

app.post('/api/users', (req, res) =>{
    const newUser = {
        id: users.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }
    users.push(newUser);
    res.status(201).json({
        success: true,
        message: "User Created",
        user: newUser
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
