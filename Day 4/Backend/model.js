const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://nishanabanu456:banu@cluster0.ivlob08.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err))

let mongoSchema=mongoose.Schema


const EmployeeSchema = mongoose.Schema
({
    ename:String,
    eage:Number,
    eposition:String,
    esalary:Number
})


var employeeModel=mongoose.model("employee",EmployeeSchema)
module.exports = employeeModel
