
const num = (num) => {
    var n = document.getElementsByClassName("num");
    var a = num
    const i=document.getElementById("ini")
    i.value+=a
}
const back=()=>{
    const i=document.getElementById("ini")
    i.value=i.value%10
}
function clear(){
    const l=document.getElementById("ini")
    l.innerText=""
}
let n=0;
const tog=()=>{

    const cg=document.getElementById("bod")
    const bu=document.getElementById("tb")
    if(n==0){
    cg.classList.add("jackie");
    bu.classList.add("chan")
    n++;
    }
    else{
        bu.classList.remove("chan")
        cg.classList.remove("jackie")
        n--;
    }
}
 