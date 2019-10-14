const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000;

app.use(cors())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

const isAnimal= require('./animal_module.js').isAnimal
app.get("/animal/:animal", isAnimal)

const generateSpread = require('./random_module.js').generateSpread
app.get("/random", generateSpread)

const displayQueue = require('./queue_module').displayQueue
const handlePeek = require('./queue_module.js').handlePeek
const handleEnqueue = require('./queue_module.js').handleEnqueue
const handleDequeue= require('./queue_module.js').handleDequeue
app.get('/queue', displayQueue)
app.get('/queue/peek', handlePeek)
app.get('/queue/enqueue', handleEnqueue)
app.get('/queue/dequeue', handleDequeue)


app.listen(port, () => {
    console.log(`Listening to port at ${port}`)
})
