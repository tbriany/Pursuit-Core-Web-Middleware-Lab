const names = ['xavier', 'michelle', 'corey', 'reed']

const displayQueue = (req, res, next) => {
    res.json({
        names
    })
}

const handlePeek = (req, res, next) => {
  res.json({
      status: "success",
      data: names[names.length - 1]
  })
}

const handleEnqueue = (req, res, next) => {
   let newName = req.query.name 
   names.unshift(newName)
   res.json({
       status: "success", 
       enqueued: newName
   })
}

const handleDequeue = (req, res, next) => {
   res.json({
       status: "success",
       dequequed: names[names.length - 1]
   })
   names.pop()
}

module.exports = {
  displayQueue,
  handlePeek,
  handleEnqueue,
  handleDequeue
}

