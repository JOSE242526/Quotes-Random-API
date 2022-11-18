//? Dependencies
const express = require('express')

//? Initial Config
const port = 9000
const app = express()

//? Json request available
app.use(express.json())




//? start server
app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
