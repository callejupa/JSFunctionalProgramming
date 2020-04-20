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
var suspectsList = []

for(var i = 0; i < suspects.length; i++){ 
  suspectsList.push(CreateSuspectObjects(suspects[i]))
}