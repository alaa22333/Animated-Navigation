//variables
const toggle =document.querySelector(".toggle"),
closeEle=document.querySelector(".close"),
ul=document.querySelector("ul"),
nav=document.querySelector("nav"),
liElements=document.querySelectorAll("li"),
overLay=document.querySelector(".overlay");

//funcs
function navigationChange(direction1,direction2){
  liElements.forEach((li,i) => {
    li.classList.replace(`slide-${direction1}-${i+1}`,`slide-${direction2}-${i+1}`)
  })
}
//for toggle method
function toggles(ele,clas){
  ele.classList.toggle(`${clas}`)
}
//main function
function toggleFun(){ 
  toggles(closeEle,`show`)
  toggles(toggle,`hiden`)
  toggles(overLay,"overlay-active")
/* nav animation */
if(overLay.classList.contains("overlay-active")){
    overLay.classList.replace("to-left","to-right")
    /* css animations */
    navigationChange(`out`,`in`)
  }
  else{
  overLay.classList.replace("to-right","to-left")
  navigationChange(`in`,`out`)
  }
}
function events(ele){
ele.addEventListener("click",toggleFun)
}

/* events */
events(toggle)
events(closeEle)
liElements.forEach((li,i)=>{
 events(li)
})




