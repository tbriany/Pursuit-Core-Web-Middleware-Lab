const animals = ['dog', 'cat', 'elephant', 'monkey', 'bear', 'tiger', 'lion', 'zebra', 'hippo', 'rhino']

const isAnimal = (req, res, next) => {
  let request = req.params.animal
  if (animals.includes(request)){
    res.json({
     status: "success",
     message: true
    })
  } else {
    res.json({
      status: "unsuccessful",
      message: false
    })
  }
}

module.exports = {
    isAnimal
}
