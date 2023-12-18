let data = [
  'Time:        53     83     72     88',
'Distance:   333   1635   1289   1532'
]

let testData = [
'Time:      7  15   30',
'Distance:  9  40  200'
] // 288





function challenge1(races){
let [times, distances] = races.map(line => line.match(/[0-9]+/g)).map(m => m.map(i => parseInt(i)))
console.log(times, distances);
let answer = 1
times.forEach((time, i) => {
  let wins = 0
  let currentDist = distances[i]
  for(let t =1; t < time; t++){
    let raceTime = time - t
    let boatDist = t * raceTime
    if(boatDist > currentDist) wins++
  }
  console.log('wins', wins);
  answer = wins? answer * wins : answer
})
console.log('🌟',answer);
}

// challenge1(testData)
challenge1(data)

function challenge2(races){
  let [times, distances] = races.map(line => [parseInt(line.match(/[0-9]+/g).join(''))])
  console.log(times, distances);
  let answer = 1
  times.forEach((time, i) => {
    let wins = 0
    let currentDist = distances[i]
    for(let t =1; t < time; t++){
      let raceTime = time - t
      let boatDist = t * raceTime
      if(boatDist > currentDist) wins++
    }
    console.log('wins', wins);
    answer = wins? answer * wins : answer
  })
  console.log('🌟',answer);
  }

  // challenge1(testData)
challenge2(data)