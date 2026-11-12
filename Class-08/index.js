const express = require('express');
const app = express()
const port = 3000
app.use(express.json());
const users = require("./userapi.json");
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/users', (req, res) => {
  res.json(users);
})

app.post('/api/users', (req, res) => {
  const newUsers = {
    id: users.length + 1,
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email

  }
  users.push(newUsers);
  res.status(201).json({
    success: true,
    message: "User Created",
    user: newUsers
  })
})

app.put('/api/users/:id',(req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found"
    });
  }
  else{
    user.first_name = req.body.first_name,
    user.last_name= req.body.last_name,
    user.email= req.body.email
  }
  res.json({
    success:true,
    message:"User Updated"
  });
})

app.delete('/api/users/:id',(req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User Not Found"
    });
  }
  else{
    user.id = req.body.id.delete;
    user.first_name = req.body.delete,
    user.last_name= req.body.delete,
    user.email= req.body.delete

  }
  res.json({
    success:true,
    message:"User delete"
  });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})