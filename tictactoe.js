let boxes=document.querySelectorAll(".box");
let reset1=document.querySelector("#reset");
let newBtn=document.querySelector("#ng");
let textMsg=document.querySelector("#message");
let container=document.querySelector(".msg");

let play1=true;
const winPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box)=>{
  box.addEventListener("click",()=>{
  if(play1){
    box.innerText="X";
    play1=false;
  }else{
   box.innerText="O";
   play1=true;
  } 
  box.disabled=true;
  checkWinner();
  });
});

const showWinner=(winner)=>
{
    textMsg.innerText=`Congratulations, the winner is ${winner}`;
    container.classList.remove("hide");
    disable();
};

const newGame=()=>
{
  play1=true;
  enable();
  container.classList.add("hide");
};

const disable=()=>{
    for(let box of boxes)
    {
        box.disable=true;
    }
};

const enable=()=>{
    for(let box of boxes)
    {
        box.disable=false;
        box.innerText="";
    }
};


const checkWinner=()=>{
    for(let pattern of winPattern){
    let b1=boxes[pattern[0]].innerText;
    let b2=boxes[pattern[1]].innerText;
    let b3=boxes[pattern[2]].innerText;
    if(b1!="" || b2!="" || b3!="")
    {
      if(b1==b2 && b2==b3){
        console.log("winner",b1);
        showWinner(b1);
      }
    }
}
};

newBtn.addEventListener('click',newGame);
reset1.addEventListener('click',newGame);