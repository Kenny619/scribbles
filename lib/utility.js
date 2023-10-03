// let a = 141;
// let b = 162;
// let t = 20;

// if (Math.abs(a - b) >= t) console.log(`dif ${Math.abs(a - b)} is bigger than ${t}`);
// if (Math.abs(a - b) <= t) console.log(`dif ${Math.abs(a - b)} is smaller than ${t}`);
// return -1;

let min = 160;
let max = 240;
let dec = [];
while (dec.length < 3) {
  dec.push(genCode(min, max, dec, 20));
}

let hex = dec.map(v => v.toString(16));
let array = [hex, [...hex].reverse()];

let result = array.flatMap(ary =>
  ary.map((e, i) => {
    let a = [...ary];
    a.splice(i, 1);
    return (output = e + a.join(""));
  })
);

console.log(result);

function genCode(min, max, array, thresh) {
  let cand = Math.floor(Math.random() * (max - min + 1)) + min;

  if (array.length > 0) {
    if (array.some(v => Math.abs(cand - v) < thresh)) return genCode(min, max, array, thresh);
  }

  return cand;
}
