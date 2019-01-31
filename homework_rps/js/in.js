// var player1 = prompt("Do you choose rock, paper or scissors?");
// var cpu = Math.floor(Math.random() *4);
// if (cpu =1){
//     cpu = "rock";
// }else if(cpu =2){
//     cpu = "paper";
// }
// else{
//     cpu = "scissors";
// }
// alert(cpu)
// var compare = function(cpu_score,player_score){
//     if(cpu_score===player_score){
//         return "The result is a tie!";
//     }
//     if(cpu_score==="rock"){
//         if(player_score==="scissors"){
//             return "rock wins";
//         }
//         else{
//             return "paper wins";
//         }
//     }
//     if(cpu_score==="paper"){
//         if(player_score==="rock"){
//             return "paper wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
//     if(cpu_score==="scissors"){
//         if(player_score==="rock"){
//             return "rock wins";
//         }
//         else{
//             return "scissors wins";
//         }
//     }
// };
// compare(cpu,player1);
var player1;
var cpu;
var cpu_score=0
var player_score=0

do{
  player1 = prompt("choose rock, paper or scissors");
  cpu = Math.floor(Math.random ()*3);

  if
   (cpu <= 0){
      cpu = "rock";
  }else if
   (cpu <= 1){
      cpu = "paper";
  }else if
    (cpu <= 2){

      cpu = "scissors"
  }
  alert(cpu)
  // if (cpu === player1)
  //        return ("Draw");

  var compare = function(cpu_score,player_score){
      if(cpu_score===player_score){
           alert("tie!");
      }
      if(cpu_score==="rock"){
          if(player_score==="scissors"){
               alert("cpu wins");
              return cpu_score++;
          }
          else{
               alert("you win");
              player_score ++;
          }
      }
      if(cpu_score==="paper"){
          if(player_score==="rock"){
               alert("cpu wins");
              cpu_score++;
          }
          else{
              return alert("you win");
              player_score ++;
          }
      }
      if(cpu_score==="scissors"){
          if(player_score==="rock"){
               alert("you win");
              player_score ++;
          }
          else{
               alert("cpu win");
              cpu_score++;
          }
      }
  };

compare(player1,cpu);
}while ((cpu_score, player_score)<=5)
