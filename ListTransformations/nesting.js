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

game.suspects.push({
  name: "Pablo Calle",
  color: "blue"
})

console.log(game["suspects"])