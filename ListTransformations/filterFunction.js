const _ = {}
const weapons = [
  {
    present: true,
    nums: [2, 4, 6]
  },
  {
    present: true,
    nums: [1 ,3, 5]
  },
  {
    present: false,
    nums: [8, 10, 12]
  },
  {
    present: true,
    nums: [14, 16, 18]
  },
  {
    present: false,
    nums: [20, 22, 24]
  }
]

_.filter = function(arr, cb) {
  //create a new array
  const storage = []
  //loop throuhg arr
  for(let i = 0; i < arr.length; i++){
    //check if cb retunrs true
    if (cb(arr[i], i, arr) === true){
      //if retunrs true, push into array
      storage.push(arr[i])
    }
    
  }
  //retunr arr
  return storage
}

_.filter(weapons, (suspectObject) => {
  return suspectObject.present
})