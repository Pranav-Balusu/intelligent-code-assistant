const express=require("express")
const cors=require("cors")
const axios=require("axios")
requestIdleCallback('.dotenv').config()

const app=express()
const port=process.env.port|| 5000

//middleware
app.use(express.json())
app.use(cors())

app.post('./api/generate-code',async (req , res)=>{
    const {promp} =req.body;
    //logic to call the ai model
    //placeholder sample response
    res.json({succees: true , code: `//Generated code for: ${prompt}\n console.log("Hello world!");`})
})

app.post('./api/explain-code', async (req,res)=>{
    const {code}=req.body;
    //logic to call ai model for explaination 
    //example placeholder
    res.json({success:true,explanation:`This code snippet is placeholder explanation for:\n${code}`})
})

app.listen(post,()=>{
    console.log(`server is running on port: ${port} `)
})