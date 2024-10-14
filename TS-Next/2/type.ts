type Point = {
  x: number
  y: number
}

function printPoint(point: Point) {
  console.log(`x座標は${point.x}です`)
  console.log(`ｙ座標は${point.y}です`)
}

printPoint({ x: 100, y: 200 })
