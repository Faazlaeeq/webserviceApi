const express=require('express')
const mongoose=require('mongoose')
const router=require('./routes/route')
const app=express()
const port=process.env.PORT || 3000
// connect to mongodb
mongoose.connect('mongodb+srv://FaazLaeeq:ahmed@apiprojnodejs.ke7r78l.mongodb.net/shop').then(()=>{
    console.log('connected to mongodb')
}).catch(err=>{
    console.log(err)
})

// middleware
app.use(express.json())
app.use(router)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});








