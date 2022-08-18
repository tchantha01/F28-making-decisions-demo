

let backpack = []

backpack.push('Jedi robe')
backpack.push('lightsaber')
backpack.push('Crippling sense if failure and guilt')

backpack.splice(1, 1)

backpack.push('wookie coat')

backpack.pop()

backpack.push('blue milk', 'baby yoda', 'a child named Luke', 'com device', 'high ground', 'blaster')

let stroller = backpack.splice(3, 2)


// console.log(backpack)
// console.log(stroller)

// console.log(backpack.length)


for(let i = 0; i < backpack.length; i++){
    console.log(backpack[i])
    console.log(i)
}