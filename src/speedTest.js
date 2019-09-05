// mergeOptions
var parent = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6
}

var child = {
  a: 2,
  b: 3,
  k: 4,
  l: 31,
  z: 21,
  v: 12
}
var i = 0

function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

console.time();
for (key in parent) {
  i++
}

for (key in child) {
  if (!hasOwn(parent, key)) {
    i++
  }
}
console.timeEnd(); // 0.6xx

console.time();
var obj = Object.assign({}, parent, child)
for (key in obj) {
  i++
}
console.timeEnd(); // 0.06x
