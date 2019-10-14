const animals = ['dog', 'cat', 'elephant', 'monkey', 'bear', 'tiger', 'lion', 'zebra', 'hippo', 'rhino']

const isAnimal = (req, res, next) => {
  let request = req.params.animal
  if (animals.includes(request)){
    next()
  } else {
    res.json({
      status: "unsuccessful",
      message: false
    })
  }
}

const sendResponse = (req, res, next) => {
  res.json({
    status: "success",
    message: true
   })
}

module.exports = {
    isAnimal, 
    sendResponse 
}
