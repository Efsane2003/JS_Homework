let value1=document.querySelector(".value1")
let value2=document.querySelector(".value2")
let result=document.querySelector("#result")
let addition=document.querySelector(".addition")
let substract=document.querySelector(".substract")
let multiply=document.querySelector(".multiply")
let division=document.querySelector(".division")
let reset=document.querySelector(".reset")




addition.addEventListener("click",function(){
    value1.addEventListener("input",function(event){
    event.target.value
})
value2.addEventListener("input",function(event){
    event.target.value
})
result.value=+value1.value+ +value2.value
})


substract.addEventListener("click",function(){
    value1.addEventListener("input",function(event){
        event.target.value
    })
    value2.addEventListener("input",function(event){
        event.target.value
    })
    result.value=value1.value-value2.value
})

multiply.addEventListener("click",function(){
    value1.addEventListener("input",function(event){
        event.target.value
    })
    value2.addEventListener("input",function(event){
        event.target.value
    })
    result.value=value1.value*value2.value
})

division.addEventListener("click",function(){
    value1.addEventListener("input",function(event){
        event.target.value
    })
    value2.addEventListener("input",function(event){
        event.target.value
    })
    result.value=value1.value/value2.value
})

reset.addEventListener("click",function(){
    value1.value="" 
    value2.value=""
    result.value=""
})


