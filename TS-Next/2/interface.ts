interface Point2 {
  x: number
  y: number
}

function printPoint2(point2: Point2) {
  console.log(`x座標は${point2.x}です`)
  console.log(`y座標は${point2.y}です`)
  console.log(`z座標は${point2.z}です`)
}

interface Point2 {
  z: number
}

printPoint2({ x: 1, y: 2, z: 3 })
