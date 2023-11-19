const express = require('express')
const mongoose = require('mongoose');
const app = express()
const cors = require('cors')
const PORT = 4000
const URL = 'mongodb://localhost:27017/task_rabbit'
const route = require('./routes/task')
app.use(cors())
app.use(express.json())


const connect = async () => {
    try {
        await mongoose.connect(URL)
        app.listen(PORT, () => {
            console.log(`App is listening on port ${PORT}`)
        })
        console.log('Connected to Mongoose')
    } catch (error) {
        console.error(`error: ${error}`)
    }
}

connect()


app.use('/api/v1', route)









