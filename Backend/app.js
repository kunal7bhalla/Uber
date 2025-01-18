const dotenv=require("dotenv");
dotenv.config();
const express=require('express');
const cors=require('cors');

const app=express();

const port=process.env.PORT || 3000;

app.use(cors());

console.log(`PORT from process.env: ${process.env.PORT}`);
app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});