// let obiwanAttack = 25
// let anakinAttack = 35

// if( obiwanAttack < anakinAttack ){
//     console.log('Anakin has a better attack than Obiwan')
// } else if( obiwanAttack > anakinAttack){
//     console.log('Obiwan has a better attack than Anakin')
// } else{
// console.log('Anakin and Obiwan have the same attack')
// }


// let obiwanHealth = 100
// let obiwanDefense = 0

// if(obiwanHealth <= anakinAttack){
//     console.log('Obiwan has been slain')
// } else{
//     obiwanHealth -= anakinAttack
//     console.log(`Obiwan healthis now at ${obiwanHealth}`)
// }

// obiwanDefense += 30

// for( let i = 0; i < 5; i++){
//     obiwanHealth -= (anakinAttack - obiwanDefense)

//     if(obiwanHealth <= 0){
//         console.log('Obiwan was slain')
//     } else{
//         console.log(`Obiwans health is now at ${obiwanHealth}`)
//     }
// }

// while(obiwanHealth > 0){
//     obiwanHealth -= (anakinAttack - obiwanDefense)
// console.log(`Obiwans health is now at ${obiwanHealth}`)
// if(obiwanHealth <= 0){
//     console.log('Obiwan is slain')
// }

// }

// for(let i = 1; i < 50; i++){
//     if(i % 3 === 0 && i % 5 === 0){
//       console.log('fizzbuzz')
//     }else if(i % 3 === 0){
//       console.log('fizz')
//     }else if(i % 5 === 0){
//       console.log('buzz')
//     }else{
//       console.log(i)
//     }
//   }

if (player1 === player2) {
    console.log("It is a draw")
  } else if (player1 === "rock" && player2 === "scissors") {
    console.log("Player 1 wins.")
  } else if (player1 === "rock" && player2 === "paper") {
    console.log("Player 2 wins.")
  } else if (player1 === "scissors" && player2 === "paper") {
    console.log("Player 1 wins.")
  } else if (player1 === "scissors" && player2 === "rock") {
    console.log("Player 2 wins.")
  } else if (player1 === "paper" && player2 === "rock") {
    console.log("Player 1 wins.")
  } else {
    console.log("Player 2 wins.")
  }