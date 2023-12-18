

let test = [
  `...#......`,
  `.......#..`,
  `#.........`,
  `..........`,
  `......#...`,
  `.#........`,
  `.........#`,
  `..........`,
  `.......#..`,
  `#...#.....`
] // 374


function challenge1(arr){
  let small = arr.map(line => line.split(''))
  console.log(small);
  let bigGalaxy = expandGalaxy(small)
  const numbered = numberGalaxy(bigGalaxy)
  let answer = []
  let map = []
  for(let y = 0; y < numbered.length; y++){
    for(let x = 0; x< numbered[y].length; x++){
      let cell = numbered[y][x]
      if(cell != '.' && !Object.keys(map).includes(cell)){
        map.push({x,y})
      }
    }
  }
  console.log('🗾', map);
  map.forEach((point, i) => {
    map.forEach((otherPoint, j) => {
      if(point == otherPoint) return
      let dist = Math.abs(Math.abs(otherPoint.x - point.x) + Math.abs(otherPoint.y - point.y))
      console.log(i+1,'=>' ,j+1, dist);
      answer.push(dist)
    })
  })
  console.log('🍔', answer);
  console.log('🌟', answer.reduce((acc, cur)=> acc+cur)/2);
}

function expandGalaxy(small){
  let out = []
  //horizontal expansion up /down
  small.forEach(line => {
    if(line.every(dot => dot == '.')){
      out.push([...line])
    }
    out.push([...line])
  })
  console.log(out.map(line => line.join('')).join('\n'));
  //vertical lines expand out
for(let i =0; i< small[0].length; i++){

  let vert = small.map(line => line[i])
  // console.log('|||');
  // console.log( vert.join('\n'));
  if(!vert.includes('#')){
    out.forEach(line => {
      line.splice(i, 0, '.')
    })
    i++
  }
}

  console.log(out.map(line => line.join('')).join('\n'));
  return out
}

function numberGalaxy(galaxy){
  let num = 1
  galaxy.forEach(line => {
    line.forEach((dot, i) => {
      if(dot == '#'){
        line.splice(i, 1, num) 
        num++
      }
    })
  })
  console.log(galaxy.map(line => line.join('')).join('\n'));
  return galaxy
}


challenge1(test)