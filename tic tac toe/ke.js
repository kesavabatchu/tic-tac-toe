let boxes = document.querySelectorAll(".nn");
let rest= document.querySelector("#reset");
var flag=0;
let msg=document.querySelector("#msg");
let msgcont=document.querySelector(".msgcont");
let newg=document.querySelector("#he");
let restgb=document.querySelector("#reset");
let count=0;
const winPatterns= [
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[3,4,5],[6,7,8],[2,4,6]
]
const canc=(o) =>
{
   
   msg.innerText=`Kudos , winner is   ${o} `;
   msgcont.classList.remove("hide");
   for(let box of boxes)
   {
     box.disabled=true;
   }

   
}
const resetg=()=>{
    count=0;
    flag=0;
    enableboxes();
    msgcont.classList.add("hide");
    for(box of boxes)
    {
        box.innerText="";
    }
}
const enableboxes=()=>{
    for(let box of boxes)
    {
        box.disabled=false;
    }

}
const draw=()=>{
    console.log(count);
    msg.innerText='this is a draw position';
    msgcont.classList.remove("hide");
    for(box of boxes)
    {
        box.disabled=true;
    }

}
const checkwinner=() =>

{
  for (let x of winPatterns)
  {
      let p1=boxes[x[0]].innerText;
      let p2=boxes[x[1]].innerText;
      let p3=boxes[x[2]].innerText;
      if(p1===p2 && p2===p3 && (p1==='X' || p1==='O'))
      {
        
        canc(p1);
        
        return;
      }
  }

  if(count===9)
    {
      count=0;
      draw();
      return;
    }
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>
    {
            if(flag===0)
            {
                console.log(1);
                box.innerText="X";

                flag=1;
            }
            else 
            {
                console.log(2);
                box.innerText="O";
                flag=0;
            }
            

            count++;
            box.disabled=true;
            box.backgroundColor='aquamarine';
            checkwinner();
    });
});
newg.addEventListener("click",resetg);
restgb.addEventListener("click",resetg);