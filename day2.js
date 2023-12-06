const data = [
  [
      " 1 green, 2 blue",
      " 13 red, 2 blue, 3 green",
      " 4 green, 14 red"
  ],
  [
      " 2 blue, 11 green",
      " 4 blue, 12 red, 4 green",
      " 7 red, 1 blue, 9 green",
      " 10 green, 12 red, 6 blue"
  ],
  [
      " 1 blue, 12 green, 2 red",
      " 9 red, 16 green",
      " 1 red, 10 green, 1 blue",
      " 1 red, 14 green"
  ],
  [
      " 8 green, 18 blue",
      " 4 green, 14 blue, 2 red",
      " 3 blue, 5 green, 11 red"
  ],
  [
      " 7 red, 15 blue, 1 green",
      " 13 blue",
      " 18 red, 2 green, 9 blue",
      " 19 blue, 5 green, 10 red",
      " 9 green, 2 blue, 7 red"
  ],
  [
      " 1 red, 8 blue, 2 green",
      " 1 blue, 3 red, 5 green",
      " 2 green, 3 red, 2 blue",
      " 1 blue, 4 green"
  ],
  [
      " 4 red, 6 green, 1 blue",
      " 3 blue, 9 green, 5 red",
      " 5 blue, 5 green, 4 red",
      " 6 green, 5 blue, 5 red",
      " 13 red",
      " 4 red, 2 blue, 9 green"
  ],
  [
      " 7 blue, 14 green, 5 red",
      " 1 green, 7 blue, 11 red",
      " 6 blue, 16 red, 4 green",
      " 8 red, 11 green, 7 blue",
      " 6 blue, 18 red, 9 green"
  ],
  [
      " 3 blue, 1 green, 6 red",
      " 1 red, 1 blue, 1 green",
      " 6 red, 2 blue, 1 green"
  ],
  [
      " 6 red, 11 blue, 12 green",
      " 1 blue, 2 red, 3 green",
      " 14 green, 6 red, 7 blue",
      " 6 red, 10 blue, 9 green",
      " 6 blue, 2 red"
  ],
  [
      " 5 blue, 2 red, 18 green",
      " 2 blue, 13 green",
      " 8 blue, 15 green, 2 red"
  ],
  [
      " 5 red, 4 blue",
      " 1 blue, 8 green, 8 red",
      " 15 green, 5 red, 4 blue"
  ],
  [
      " 12 blue, 1 red, 6 green",
      " 9 red, 6 blue, 12 green",
      " 3 red, 11 green, 6 blue",
      " 8 red, 4 green, 10 blue",
      " 3 green, 7 blue"
  ],
  [
      " 9 red, 5 green, 1 blue",
      " 1 red, 3 blue",
      " 10 green, 7 red",
      " 5 blue, 8 green, 10 red"
  ],
  [
      " 3 blue, 9 red, 14 green",
      " 15 green, 2 blue, 6 red",
      " 7 green, 1 red, 5 blue"
  ],
  [
      " 7 green, 4 blue, 6 red",
      " 6 green, 4 blue, 8 red",
      " 5 red, 2 blue, 10 green",
      " 4 blue, 4 red, 15 green",
      " 9 red, 15 green, 6 blue",
      " 7 green, 5 blue, 2 red"
  ],
  [
      " 8 red, 6 green, 2 blue",
      " 4 green, 1 blue, 17 red",
      " 1 green, 11 red, 1 blue"
  ],
  [
      " 13 blue, 1 green, 3 red",
      " 2 red, 2 green",
      " 11 red, 1 green, 7 blue",
      " 2 green, 7 blue, 2 red"
  ],
  [
      " 2 green, 13 red, 2 blue",
      " 1 green, 6 blue, 4 red",
      " 1 green, 2 blue, 15 red"
  ],
  [
      " 10 red, 11 blue, 8 green",
      " 6 red, 13 blue, 2 green",
      " 6 blue, 8 green, 3 red",
      " 10 red, 2 blue, 8 green",
      " 2 red, 3 blue, 7 green",
      " 3 red"
  ],
  [
      " 2 blue, 10 red",
      " 5 green, 3 red",
      " 5 green, 4 red, 4 blue",
      " 6 blue, 9 red, 10 green"
  ],
  [
      " 5 red, 1 green",
      " 5 red",
      " 4 red, 1 blue",
      " 1 blue, 10 red"
  ],
  [
      " 2 red, 11 blue, 4 green",
      " 4 blue",
      " 1 blue, 6 green, 4 red",
      " 3 green, 4 blue, 2 red"
  ],
  [
      " 4 green",
      " 12 green, 4 blue, 1 red",
      " 11 green, 1 blue, 2 red"
  ],
  [
      " 10 red, 1 blue, 3 green",
      " 3 green, 6 blue, 6 red",
      " 2 green, 9 red, 2 blue",
      " 1 blue, 3 green, 7 red",
      " 6 blue, 4 green",
      " 1 red"
  ],
  [
      " 4 red, 11 green, 5 blue",
      " 2 blue, 11 red, 9 green",
      " 11 green, 3 red",
      " 14 green, 13 red, 5 blue",
      " 10 red, 5 blue, 9 green",
      " 12 red, 4 blue, 6 green"
  ],
  [
      " 8 red, 9 blue, 7 green",
      " 14 red, 15 blue, 2 green",
      " 7 green, 13 blue, 9 red",
      " 8 green, 4 blue, 1 red"
  ],
  [
      " 4 blue, 4 green, 3 red",
      " 4 green, 9 red, 4 blue",
      " 13 red, 10 blue, 4 green"
  ],
  [
      " 7 red",
      " 1 blue, 1 green",
      " 3 red, 1 green, 1 blue",
      " 2 blue",
      " 17 red, 2 blue, 1 green",
      " 6 red, 1 green, 2 blue"
  ],
  [
      " 10 green, 4 red, 4 blue",
      " 5 red, 6 blue, 9 green",
      " 2 red, 3 green, 4 blue",
      " 1 blue, 9 green, 1 red",
      " 1 red"
  ],
  [
      " 6 red, 3 green",
      " 1 blue, 3 green, 9 red",
      " 2 blue, 11 red",
      " 13 red, 2 blue, 3 green",
      " 5 green, 3 blue"
  ],
  [
      " 2 red, 1 blue, 1 green",
      " 3 green, 1 blue",
      " 1 red, 6 green",
      " 3 red, 3 green",
      " 1 blue",
      " 12 green, 3 red, 1 blue"
  ],
  [
      " 17 blue, 14 green, 7 red",
      " 5 red, 9 green, 16 blue",
      " 8 green, 3 blue, 3 red",
      " 10 green, 12 blue, 1 red"
  ],
  [
      " 2 red, 1 green, 9 blue",
      " 14 blue, 2 green, 9 red",
      " 10 blue, 2 green, 16 red",
      " 2 green, 5 red, 14 blue",
      " 5 blue, 12 red, 2 green",
      " 8 blue, 15 red, 3 green"
  ],
  [
      " 14 green, 4 red",
      " 16 green, 4 red",
      " 4 red, 3 blue, 3 green",
      " 5 green, 4 red, 4 blue",
      " 3 red, 1 blue, 8 green"
  ],
  [
      " 1 blue, 8 red, 4 green",
      " 2 green, 15 blue, 4 red",
      " 13 blue, 5 red, 8 green"
  ],
  [
      " 2 red, 8 green, 7 blue",
      " 9 green, 20 red, 3 blue",
      " 3 blue, 1 green, 2 red",
      " 9 red, 1 blue, 4 green",
      " 6 green, 2 blue, 20 red"
  ],
  [
      " 8 red, 2 blue, 2 green",
      " 7 green, 4 red",
      " 4 red, 10 green, 2 blue"
  ],
  [
      " 9 green, 11 red, 6 blue",
      " 6 blue, 2 green, 19 red",
      " 2 red, 3 blue, 2 green",
      " 4 green, 2 blue, 13 red",
      " 19 red, 7 green, 1 blue"
  ],
  [
      " 7 blue, 2 green, 11 red",
      " 19 red, 4 green, 2 blue",
      " 1 green, 10 red, 5 blue",
      " 2 red, 1 green, 2 blue"
  ],
  [
      " 1 red, 1 blue, 13 green",
      " 13 green, 11 red, 5 blue",
      " 19 green, 3 blue",
      " 18 green, 1 red"
  ],
  [
      " 1 blue, 2 green, 7 red",
      " 13 green, 5 red, 7 blue",
      " 6 red, 13 green, 9 blue",
      " 12 red, 17 blue, 13 green",
      " 9 red, 16 blue, 5 green",
      " 11 red, 4 green"
  ],
  [
      " 3 blue, 4 red",
      " 6 red, 5 blue",
      " 7 blue, 1 green, 5 red",
      " 3 blue, 10 red"
  ],
  [
      " 10 green, 10 blue",
      " 2 blue, 10 red, 10 green",
      " 2 green, 5 red, 4 blue",
      " 8 red, 2 green, 2 blue",
      " 14 red, 3 blue, 10 green",
      " 14 red, 5 green, 3 blue"
  ],
  [
      " 9 green, 2 red, 2 blue",
      " 2 blue, 2 red, 7 green",
      " 9 blue, 6 green"
  ],
  [
      " 2 blue, 1 green",
      " 1 blue, 1 red, 1 green",
      " 1 blue",
      " 1 blue, 1 green"
  ],
  [
      " 4 green, 10 red, 14 blue",
      " 19 red, 3 blue, 1 green",
      " 4 green, 14 blue, 15 red",
      " 9 blue, 17 red",
      " 3 green, 12 blue, 7 red",
      " 1 red, 11 blue, 4 green"
  ],
  [
      " 9 red, 2 green, 1 blue",
      " 7 red, 3 blue",
      " 8 red, 1 green",
      " 1 blue, 3 red"
  ],
  [
      " 2 red, 3 green, 13 blue",
      " 7 red, 15 blue, 3 green",
      " 15 blue, 7 red",
      " 11 blue, 5 red, 3 green"
  ],
  [
      " 4 red, 4 green, 2 blue",
      " 2 green, 3 red",
      " 2 green, 3 red, 11 blue",
      " 3 green, 2 red"
  ],
  [
      " 4 blue, 17 green",
      " 3 blue, 17 green, 1 red",
      " 6 green, 8 blue"
  ],
  [
      " 14 blue, 3 red",
      " 11 green, 6 red, 9 blue",
      " 6 blue, 10 red",
      " 1 red, 1 green, 4 blue",
      " 9 blue, 6 green",
      " 3 red, 2 blue, 8 green"
  ],
  [
      " 1 blue, 9 red, 9 green",
      " 11 green, 1 red, 7 blue",
      " 11 green, 9 red, 7 blue",
      " 12 green, 15 red, 7 blue",
      " 7 blue, 12 red, 1 green",
      " 6 blue, 2 green, 4 red"
  ],
  [
      " 7 blue, 2 red, 4 green",
      " 2 red, 16 blue, 8 green",
      " 15 blue, 7 green",
      " 5 blue, 3 red, 2 green",
      " 9 green, 15 blue",
      " 1 green, 14 blue"
  ],
  [
      " 5 red, 10 blue, 2 green",
      " 5 blue, 5 red, 2 green",
      " 6 red, 1 green",
      " 7 red, 8 blue, 1 green",
      " 1 green, 13 blue"
  ],
  [
      " 14 blue, 11 green, 3 red",
      " 10 blue, 7 green, 2 red",
      " 2 red, 13 green, 1 blue"
  ],
  [
      " 10 blue, 6 red",
      " 10 red, 4 blue, 6 green",
      " 2 green, 16 blue",
      " 6 blue, 11 red, 7 green"
  ],
  [
      " 3 red, 2 blue",
      " 9 green, 12 blue",
      " 1 red, 1 green, 5 blue",
      " 1 blue, 2 green"
  ],
  [
      " 6 red, 9 green, 2 blue",
      " 6 green, 6 red, 7 blue",
      " 2 green, 7 blue, 9 red",
      " 1 green, 10 blue",
      " 1 green, 3 blue, 1 red",
      " 10 green, 1 red, 3 blue"
  ],
  [
      " 13 green, 5 red, 9 blue",
      " 3 blue, 12 green, 9 red",
      " 4 blue, 17 green, 9 red",
      " 12 green, 2 red",
      " 6 red, 3 green, 8 blue",
      " 13 green, 12 red"
  ],
  [
      " 4 green, 15 red",
      " 5 green, 15 red",
      " 1 blue, 7 green, 12 red",
      " 8 green, 3 blue, 4 red",
      " 11 green, 11 red, 3 blue",
      " 7 red, 12 green, 2 blue"
  ],
  [
      " 3 red",
      " 2 green, 8 red",
      " 10 red, 8 blue",
      " 1 blue, 4 red, 2 green",
      " 2 green, 13 red",
      " 6 red, 9 blue"
  ],
  [
      " 4 green, 12 blue, 5 red",
      " 5 blue, 5 green, 5 red",
      " 3 blue, 17 green",
      " 1 red, 1 blue, 17 green",
      " 10 green, 4 red, 15 blue",
      " 15 blue, 4 green"
  ],
  [
      " 12 red, 9 blue, 4 green",
      " 1 green, 1 red, 8 blue",
      " 10 green, 11 red, 1 blue",
      " 2 red, 10 blue"
  ],
  [
      " 1 red, 3 green, 11 blue",
      " 2 red, 6 green, 3 blue",
      " 1 red, 7 green, 1 blue"
  ],
  [
      " 2 green, 2 red, 4 blue",
      " 19 red, 11 blue, 4 green",
      " 6 blue, 2 green, 13 red",
      " 16 blue, 4 green"
  ],
  [
      " 1 blue, 5 red, 1 green",
      " 1 green, 1 red, 1 blue",
      " 2 green, 1 blue, 19 red"
  ],
  [
      " 3 green, 1 red",
      " 1 red, 3 blue",
      " 3 blue, 2 red, 10 green",
      " 4 green"
  ],
  [
      " 5 green, 11 blue, 5 red",
      " 13 green, 19 red, 8 blue",
      " 19 red, 2 green, 11 blue"
  ],
  [
      " 7 blue, 9 green",
      " 1 red, 11 blue, 2 green",
      " 6 blue, 10 green, 1 red"
  ],
  [
      " 2 red, 2 green, 9 blue",
      " 1 green, 20 blue, 1 red",
      " 17 blue, 3 green, 2 red",
      " 3 green, 13 blue, 2 red",
      " 16 blue, 3 green",
      " 11 blue"
  ],
  [
      " 6 red, 4 green, 10 blue",
      " 6 red, 7 blue",
      " 1 blue, 8 green",
      " 3 green, 6 red, 1 blue"
  ],
  [
      " 2 green, 12 blue, 2 red",
      " 6 red, 6 blue, 3 green",
      " 8 red, 3 green, 1 blue",
      " 3 green, 5 red, 10 blue"
  ],
  [
      " 1 red, 15 green",
      " 3 blue, 5 green, 6 red",
      " 7 red, 5 green",
      " 12 red, 12 green"
  ],
  [
      " 14 blue, 2 green, 8 red",
      " 13 blue, 6 green, 4 red",
      " 4 green, 6 red, 1 blue"
  ],
  [
      " 12 red, 5 blue, 1 green",
      " 6 blue, 11 red",
      " 2 red, 7 blue",
      " 6 blue, 16 red"
  ],
  [
      " 7 red, 2 green, 1 blue",
      " 6 blue",
      " 3 red, 1 green, 10 blue",
      " 5 blue, 2 green, 1 red"
  ],
  [
      " 9 blue, 3 green, 14 red",
      " 16 red, 15 blue",
      " 16 red, 9 green, 10 blue",
      " 2 red, 8 blue, 3 green"
  ],
  [
      " 7 green, 5 blue, 2 red",
      " 5 red, 5 blue, 1 green",
      " 2 red, 3 blue, 10 green",
      " 5 green, 1 blue, 3 red",
      " 5 blue, 3 red, 7 green"
  ],
  [
      " 7 red, 6 blue",
      " 6 red, 6 blue",
      " 7 blue, 2 green",
      " 3 red, 9 blue"
  ],
  [
      " 8 green, 9 red, 1 blue",
      " 9 red, 7 green",
      " 1 green, 5 red",
      " 2 green, 1 red",
      " 1 blue, 14 red, 6 green",
      " 1 blue, 11 green, 6 red"
  ],
  [
      " 4 blue, 14 red, 1 green",
      " 2 red, 4 green, 2 blue",
      " 7 green, 4 blue, 13 red",
      " 2 red, 1 green, 6 blue"
  ],
  [
      " 9 red, 2 blue, 2 green",
      " 6 green, 6 red",
      " 9 red, 3 blue, 6 green"
  ],
  [
      " 9 green, 1 red, 1 blue",
      " 4 red, 15 green",
      " 7 green, 1 blue, 12 red",
      " 1 blue, 11 red, 14 green",
      " 2 green, 11 red"
  ],
  [
      " 13 green",
      " 11 green",
      " 15 blue, 10 green",
      " 8 blue, 6 green",
      " 11 green, 1 red, 3 blue",
      " 13 green"
  ],
  [
      " 13 green, 1 blue, 4 red",
      " 1 green, 5 red",
      " 1 blue, 9 green, 5 red"
  ],
  [
      " 4 green, 5 red, 2 blue",
      " 4 green",
      " 8 green, 2 blue, 1 red",
      " 4 blue, 8 green, 1 red",
      " 5 red, 9 blue, 8 green",
      " 7 blue"
  ],
  [
      " 5 green, 1 blue, 3 red",
      " 2 blue, 2 red, 3 green",
      " 3 green",
      " 2 blue, 1 red, 6 green"
  ],
  [
      " 13 blue, 6 red, 15 green",
      " 5 green, 14 blue, 9 red",
      " 3 green, 15 blue, 5 red",
      " 13 red, 13 green",
      " 18 red, 4 green, 19 blue",
      " 10 green, 10 red, 18 blue"
  ],
  [
      " 1 red, 1 green",
      " 1 blue, 2 green, 1 red",
      " 5 red, 2 blue"
  ],
  [
      " 9 blue",
      " 6 green, 12 blue, 2 red",
      " 3 red, 1 green, 8 blue",
      " 7 green, 2 red, 8 blue"
  ],
  [
      " 15 red, 7 green, 1 blue",
      " 19 green, 12 red, 1 blue",
      " 7 red, 16 green",
      " 8 green, 1 blue, 14 red",
      " 8 red, 1 blue, 9 green"
  ],
  [
      " 11 red, 4 green",
      " 7 green, 8 red",
      " 4 blue, 6 green",
      " 8 red, 6 green, 1 blue",
      " 6 green",
      " 1 red, 1 green, 4 blue"
  ],
  [
      " 15 green",
      " 1 red, 4 blue, 4 green",
      " 1 red, 1 blue",
      " 4 red, 1 green, 5 blue",
      " 18 green, 3 red, 3 blue",
      " 1 red"
  ],
  [
      " 1 blue, 3 green, 10 red",
      " 1 blue, 6 green",
      " 15 green, 2 red, 3 blue",
      " 2 blue, 8 red, 11 green",
      " 13 green, 10 red",
      " 5 red"
  ],
  [
      " 8 green",
      " 5 blue, 2 red, 4 green",
      " 3 green, 4 red"
  ],
  [
      " 5 red, 4 blue",
      " 1 blue, 2 red, 9 green",
      " 10 green, 3 red",
      " 4 green, 3 blue, 4 red",
      " 5 red, 4 green, 3 blue"
  ],
  [
      " 3 green, 3 blue, 2 red",
      " 2 blue, 2 red, 1 green",
      " 3 green, 5 blue"
  ],
  [
      " 11 green, 4 red, 12 blue",
      " 9 red, 4 blue",
      " 20 green, 6 blue"
  ],
  [
      " 12 red, 9 green",
      " 12 red",
      " 9 red, 3 green",
      " 8 red, 4 blue, 4 green",
      " 8 blue, 11 red, 2 green"
  ]
]
let mapped = data.map(d => d.map(s => convert(s.split(',').map(l => l.trim()))))
console.log(mapped);

const red = /red/
const blue = /blue/
const gree = /green/

let limits = {
  green: 13,
  red: 12,
  blue: 14
}


function convert(arr){
  let out = {
    green: 0, red: 0, blue: 0
  }
  arr.forEach(grab => {
      let split = grab.split(' ')
      out[split[1]] = parseInt(split[0])
  })
  return out
}

let answer = 0
mapped.forEach((game, i) =>{
  console.log('🗺️', game);
  let valid = true
  game.forEach(grab => {
    for (let key in grab){
      let num = grab[key]
      if(num > limits[key]) valid = false
    }
  })
  answer += valid ? i + 1 : 0
})
console.log('💹', answer);

let minPower = 0
mapped.forEach((game, i) =>{
  console.log('🗺️', game);
  let mins = {red: 0, green: 0, blue: 0}
  game.forEach(grab => {
    for (let key in grab){
      let num = grab[key]
      mins[key] = num > mins[key] ? num : mins[key]
    }
  })
  minPower += mins.red * mins.green * mins.blue
})
console.log('💪', minPower)