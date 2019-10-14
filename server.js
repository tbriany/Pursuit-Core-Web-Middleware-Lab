const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const animal= require('./animal_module.js')

app.get("/animal/:animal", animal.isAnimal, animal.sendResponse)

const randomNum = require('./random_module.js')
app.get("/random", randomNum.generateSpread)

const queue = require('./queue_module')
app.get('/queue', queue.displayQueue)
app.get('/queue/peek', queue.handlePeek)
app.get('/queue/enqueue', queue.handleEnqueue)
app.get('/queue/dequeue', queue.handleDequeue)


app.listen(port, () => {
    console.log(`Listening to port at ${port}`)
})
