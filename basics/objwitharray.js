const s=["viral","amisha","pooja","mansi"]
const s2=["viral","mansi","amisha","mansi"]
//s.push(s2)
//console.log(s);
//console.log(s[2][1]);
const all=s.concat(s2)
//console.log(all);
const al=[...s,...s2]
//console.log(al);
const snd=[1,2,3,[4,5,6],7,[6,7[4,5]]]
const rsnd=snd.flat(Infinity)
console.log(rsnd);
const resnd = snd.flat(Infinity)
console.log(resnd);



console.log(Array.isArray("Hi"))
console.log(Array.from("Hi"))
console.log(Array.from({name: "hi"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));