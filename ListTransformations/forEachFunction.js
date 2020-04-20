/* List transformation normal with for cycle */
function CreateSuspectObjects(name) {
  return {
    name: name,
    color: name.split(' ')[2],
    speak() {
      console.log('My name is ', name)
    }
  }
}

let suspects = ['Miss scarlet', 'Colonel Mustard', 'Mr. White']
let suspects2 = {0: 'Miss scarlet', 1: 'Colonel Mustard', 2: 'Mr. White'}

for(var i = 0; i < suspects.length; i++){ 
  suspectsList.push(CreateSuspectObjects(suspects[i]))
}

console.log(suspectsList)
/*------------------------------------------------------------------ */
/* looping with _.each */
const _ = {}

_.each = function(list, callback) {
  if (Array.isArray(list)){
    //loop thought array
    for(var i = 0; i < list.length; i++) {
      //call the callback with a list item
      callback(list[i], i, list)
    }
  } else {
    //loop thought object
    for(var key in list){
      //call the callback with a list item
      callback(list[key], key, list)
    }
      
  }
}

let suspects = ['Miss scarlet', 'Colonel Mustard', 'Mr. White']
let suspects2 = {'Miss scarlet', 'Colonel Mustard', 'Mr. White'}

//take two parameters --> list and a callback
//on each item it's gonna be called on this list
/*
- iterates over a list of elemnts, passing the values to a function
- Each invocation of iterator, the function, is called with three arguments:
  (element, index, list). If list is a Javascript object, iterator`s arguments
  will be (value, key, list)
*/
_.each(suspects, function(name, i, list) {
  if (list[i + 1]) {
    console.log(name, 'is younger than', list[i + 1] )
  } else {
    console.log(name, 'is the oldest')
  }
})
