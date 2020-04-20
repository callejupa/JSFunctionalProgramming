const _ = {}

_.map = function(list, callback) {
  //create an empty array
  var storage = []
  //loopin
  for (var i = 0; i < list.length; i++){
    storage.push(callback(list[i], i, list))
  }

  return storage
}

const weapons = [1, 2, 3]

const makeBroken = function(item) {
  return `broken ${item}`
}

_.map([weapons, function(val) {return val + 1}])