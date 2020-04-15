//Bracket notation is the same as dot notation

let person = []
person.name = 'Don Calle'
person.lastname = 'García'
person['age'] = 25

let who = person.name

console.log(person[0])//this is undefined
console.log(person['name']+person['age'])//this is correct notation