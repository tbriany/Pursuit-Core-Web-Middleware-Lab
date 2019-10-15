const generateSpread = (req, res, next) => {
   let floor = parseInt(req.query.floor)
   let ceil = parseInt(req.query.ceil)
   let newArr = []
   while (floor <= ceil) {
       newArr.push(floor++)
   } 
//    for (let i = floor; i <= ceil; i++) {
//        newArr.push(i)
//    }
   let randomPick = newArr[Math.floor(Math.random() * newArr.length)]
   res.json({
      status:"Success",
      range: [newArr[0], newArr[newArr.length - 1]],
      randPick: randomPick
   })
}


module.exports = {
   generateSpread
}