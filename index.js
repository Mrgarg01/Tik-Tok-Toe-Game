let boxes= document.querySelectorAll(".box");
let reset= document.querySelector(".reset");
let msg= document.querySelector("#msg");
let newGame= document.querySelector(".new-game");
let msgcon= document.querySelector(".msg-container");
let turnO =true;
// 2D array for storing winning Area
const winPattern= [
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,5],
      [6,7,8]
];

// for reset game
const resetgame= ()=>{
    turnO=true;
    enableBoxes();
    msgcon.classList.add("hide");
 }


// show Winner

const showWinner= (winner)=>{
    msg.innerText= `Congratulation , Winner is  ${winner}`;
    msgcon.classList.remove("hide");
    disableButton();

}
// addeventListner apply on the each button
boxes.forEach((box) =>{
    box.addEventListener("click",() => {
        console.log(`box was clicked`)
        if(turnO){
            box.innerText="O";
            turnO=false;
        }else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        cheackWinner();
    });
    
});
// disable button after the winning
const disableButton= ()=>{
    for(let box of boxes){
        box.disabled= true;
    }
}

// for enable function after new game start
const enableBoxes= ()=>{
    for(let box of boxes){
        box.disabled= false;
        box.innerText="";
    }

}
// cheack winner

const cheackWinner = ()=>{
    for( let pattern of winPattern){  
           let pos1val= boxes[pattern[0]].innerText
           let pos2val= boxes[pattern[1]].innerText;
           let pos3val= boxes[pattern[2]].innerText;
          if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val===pos2val && pos2val===pos3val){
               disableButton(pos1val);
               showWinner(pos1val);
            }
          }
    }
}


newGame.addEventListener("click", resetgame);
reset.addEventListener("click",resetgame);