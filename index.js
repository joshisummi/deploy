import express from 'express';
import cors from 'cors';
const PORT=8899;
const app=express();
app.use(cors())
 app.get("/api/v1/products",(req,res)=>{
      let proData=[
        {"id":1,"name":"a","price":567,"quantity":5},
        {"id":2,"name":"b","price":667,"quantity":6},
        {"id":3,"name":"c","price":767,"quantity":7},
        {"id":4,"name":"d","price":867,"quantity":8}
      ]
      res.status(200).json({"err":0,"product":proData})
 })
//not found
app.use((req,res)=>{
    res.status(400).send("Invalid routes")
})
app.listen(PORT,(err)=>{
    if(err) throw err;
    else console.log(`Serve work on ${PORT}`)
})