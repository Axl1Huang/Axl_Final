let todolist=[];
let donelist=[];
function savebutton(){
   let text_input= document.getElementById("text_input");
   todolist.push(text_input.value);
   let todotext=document.getElementById("todotext");
   let todoout="<div><button id= todobtn onclick=changetodone()>" +text_input.value+"</div>";
   todotext.innerHTML+=todoout;
   document.getElementById("todonum").innerHTML=todolist.length;
   console.log(todolist[0])
}

function changetodone(){
console.log(1)
let donetext=document.getElementById("donetext")
    doneout="<div><button onclick=changetodo()>"+todolist[0]+"</div>"
    donetext.innerHTML+=doneout;
donelist.push(donetext.value);
document.getElementById("donenum").innerHTML=donelist.length;
}