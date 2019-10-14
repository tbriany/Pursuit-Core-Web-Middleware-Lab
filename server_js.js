document.addEventListener("DOMContentLoaded", () => {
    listenToAnimalBtn()
    listenToRandomBtn()
    displayQueue()
    listenToPeekBtn()
    listenToEnqueueBtn()
    listenToDequeueBtn()
})

const listenToAnimalBtn = () => {
  let button = document.querySelector("#sbmtAnimal")
  button.addEventListener('click', getAnimalResponse)
}

const getAnimalResponse = async () => {
   userSearch = document.querySelector("#searchAnimal")
   let url = `http://localhost:3000/animal/${userSearch.value}`
   let response = await axios.get(url)
   handleAnimalResponse(response.data)
}

const handleAnimalResponse = (response) => {
    let message = response.message
    let result = document.createElement("li")
    if (message) {
     result.innerText = `Yes, we do have ${userSearch.value}`
    } else {
     result.innerText = `No, we do not have ${userSearch.value}`
    }
    let animalResults = document.querySelector("#animalResults")
    animalResults.append(result)
    userSearch.value = ""
}

const listenToRandomBtn = () => {
  let button = document.querySelector("#sbmtNums")
  button.addEventListener('click', getRandomNumResponse)
}

const getRandomNumResponse = async () => {
   floor = document.querySelector("#floorInput")
   ceil = document.querySelector("#ceilInput")
   let url = `http://localhost:3000/random?floor=${floor.value}&ceil=${ceil.value}`
   let response = await axios.get(url)
   handleRandomNumResponse(response.data)
}

const handleRandomNumResponse = (response) => {
   let randomPick = response.randPick
   let ranNumResults = document.querySelector("#ranNumResults")
   let newRanNum = document.createElement("li")
   newRanNum.innerText = `${randomPick} is a number in between ${floor.value} and ${ceil.value}`
   ranNumResults.append(newRanNum)
   floor.value = ""
   ceil.value = ""
}

const displayQueue = async () => {
  let url = 'http://localhost:3000/queue'
  let response = await axios.get(url)
  let data = response.data.names
  let namesList = document.querySelector("#namesList")
  data.forEach(el => {
    let newLi = document.createElement("li")
    newLi.innerText = el
    namesList.append(newLi)
  })
}

const listenToPeekBtn = () => {
  let button = document.querySelector("#peekBtn")
  button.addEventListener('click', handlePeek)
}

const listenToEnqueueBtn = () => {
  let button = document.querySelector("#enqueueBtn")
  button.addEventListener('click', handleEnqueue)
}

const listenToDequeueBtn = () => {
  let button = document.querySelector("#dequeueBtn")
  button.addEventListener('click', handleDequeue)
}

const handlePeek = async () => {
 let url = 'http://localhost:3000/queue/peek'
 let response = await axios.get(url)
 let data = response.data
 showMessage(data)
}

const showMessage = (data) => {
  let nextName = data.data
  let nameDiv = document.querySelector("#queueDiv")
  let newPtag = document.createElement('p')
  newPtag.innerText = `Up next in the queue is ${nextName}`
  nameDiv.append(newPtag)
}

const handleEnqueue = async () => {
  let userNameInput = document.querySelector("#nameInput")
  let url = `http://localhost:3000/queue/enqueue?name=${userNameInput.value}`
  let response = await axios.get(url)
  let data = response.data
  updateList(data)
  userNameInput.value = ""
}


const handleDequeue = async () => {
  let url = 'http://localhost:3000/queue/dequeue'
  let response = await axios.get(url)
  let data = response.data
  updateList(data)
}

const updateList = (data) => {
  let namesList = document.querySelector("#namesList")
 namesList.innerHTML = ""
 displayQueue()
}

