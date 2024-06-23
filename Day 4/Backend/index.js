// 1.Importing the express

const express=require('express')
 const employeeModel=require("./model")
 const cors=require('cors')
// 2.Initialization

const app=new express()

//middleware || parsing the parameters

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());


// 3.Api creation

app.get('/',(req,res)=>{
    res.send("The message from api")})

//Trial api

app.get('/trial',(req,res)=>{
    res.send("This is the trial message")
})

//api for adding data
app.post('/create',async(req,res)=>{
    var result = await new employeeModel(req.body)
    result.save()
    res.send("Data added")

    })

//api for viewing data
app.get('/view',async(req,res)=>{
    var data=await employeeModel.find()
    res.json (data)
    console.log(data)
})

//api for deleting data
app.delete('/remove/:id',async(req,res)=>{
    console.log(req.params)
    let id=req.params.id
    await employeeModel.findByIdAndDelete(id)
    res.send("Deleted")
})

//api for updating data

app.put('/edit/:id',async(req,res)=>{
    let id=req.params.id
    await employeeModel.findByIdAndUpdate(id,req.body)
    res.send("Data Updated")
   })

//4.seting the port

app.listen(3005,()=>{
    console.log("port 3005 is running")
})