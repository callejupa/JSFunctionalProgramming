const game = {
  'suspects': [
    {
      name: "Rusty",
      color: "orange"
    },
    {
      name: "Miss Scarlet",
      color: "red"
    }
  ]
}

function foo(suspect) {
  for (let i = 0; i < suspect.length; i++){
    console.log(suspect[i])
  }
}

function foo2(suspect) {
  for (let key in suspect){
    console.log(suspect[key])
  }
}

foo(game.suspects)
foo2(game.suspects)