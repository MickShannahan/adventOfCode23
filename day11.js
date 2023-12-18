

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
]


function challenge1(arr){
  let small = arr.map(line => line.split(''))
  console.log(small);
  let bigGalaxy = expandGalaxy(small)
  const numbered = numberGalaxy(bigGalaxy)

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