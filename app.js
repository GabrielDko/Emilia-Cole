const express = require("express")
const app = express();
const path = require("path")

app.listen(3030, ()=> {console.log("Arrancando el servidor en la ruta 3030")})

app.get("/", (req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})
app.get("/views/index.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/index.html"))
})
app.get("/views/about.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/about.html"))
})
app.get("/views/music.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/music.html"))
})

app.get("/views/contact.html",(req,res)=>{
    res.sendFile(path.join(__dirname,"/views/contact.html"))
})

app.use(express.static("public"))