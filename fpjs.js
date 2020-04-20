let todolist=[];
let donelist=[];
function savebutton(){
   let text_input= document.getElementById("text_input");
//    if(text_input=""){
//        alert("cant save nothing")
//        console.dir("1")
//        return false
//    }
   todolist.push(text_input.value);
   let todotext=document.getElementById("todotext");
   let todoout="<div><button id=todobtn>"+text_input.value+"</div>";
   todotext.innerHTML+=todoout;
   document.getElementById("todonum").innerHTML=todolist.length;
   console.log(todoout)
   document.getElementById("todotext").addEventListener("click",changetodone)
   document.getElementById("donetext").addEventListener("click",changetodo)
//    document.getElementById("todotext").addEventListener("click",remove)
//    document.getElementById("donetext").addEventListener("click",remove)
}

function changetodone(event){
let newout=event.target.innerText
let donetext=document.getElementById("donetext")
    doneout="<div><button id=donebtn>"+newout+"</div>"
    donetext.innerHTML+=doneout;
donelist.push(donetext.value);
document.getElementById("donenum").innerHTML=donelist.length;
}

function changetodo(event){
    let new1out=event.target.innerText
    let dotext=document.getElementById("todotext")
        doout="<div><button id=todobtn>"+new1out+"</div>"
        dotext.innerHTML+=doout;
    todolist.push(todotext.value);
    document.getElementById("todonum").innerHTML=todolist.length;
    }

    // function remove(){
    //     event.target.remove
    // }