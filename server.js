const express=require("express");
const path=require('path');
const app = express();
const port=process.env.Port ||8000;

const static_path=path.join(__dirname,"public");
app.use(express.static(static_path));

app.get("",(req,res)=>{
    res.render(index)
})
app.get('/:id',(req,res)=>{
    res.sendFile(path.join(static_path,"about.html"))
})
app.use((req,res)=>{
    res.json("404");
})
app.listen(port,(req,res)=>{

    console.log(`Listening on  ${port}`);
})
