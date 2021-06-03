const dotenv = require("dotenv").config()
const express = require("express")
const cors = require("cors")
const app = express()
const port = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

app.use("/api", (_, res) => {
    res.json({data:"API is here to stay"})
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


console.log("its alive")
console.log(__dirname)
console.log(__filename)
console.log(process.env.USER) // Windows = USERNAME
console.log(process.env.PORT)