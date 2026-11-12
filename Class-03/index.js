const express = require('express');
const app = express()
const port = 3000



app.get('/', (req, res) => {
  res.send('Hello World!')
})

function Validation(req,res,next){
    const productid = parseInt(req.params.id);
    if(isNaN(id) || id <= 0){
       return res.status(400).json({
        success: false,
        message:"invalid Id"
       })
       
    }
    next();
}
app.get('/product/:id', Validation, (req,res,next) =>{
    const productid = parseInt(req.params.id);
    if (productid !== 1) {
        const err = new Error("404 Product not found");
        err.status = 404;
        next(err);
    }
    else{
        res.json({ id: productid, name: "Sample Product"})
    }
})


const adminRouter = express.Router();
app.use("/admin" ,adminRouter );

adminRouter.get('/dashboard', (req, res) => {
  res.send('Hello DAsh')
})
adminRouter.get('/setting', (req, res) => {
  res.send('Hello Sett')
})
adminRouter.get('/profile', (req, res) => {
  res.send('Hello Pro')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})