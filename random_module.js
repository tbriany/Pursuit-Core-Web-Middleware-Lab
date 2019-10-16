
const validNumbers = (req, res, next) => {
   let floor = parseInt(req.query.floor)
   let ceil = parseInt(req.query.ceil)
   if (isNaN(floor) || isNaN(ceil)) {
      res.json({
         status: "Error floor or ceil is not a valid number"
      })
   } else {
      next(); 
   }
}


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
      range: [floor, ceil],
      randPick: randomPick
   })
}


module.exports = {
   generateSpread, 
   validNumbers
}