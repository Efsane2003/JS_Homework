let myform=document.querySelector("#myform")
let inputName=document.querySelector("#exampleInput")
let inputEmail=document.querySelector("#exampleInpuEmail")


let id=new URLSearchParams(window.location.search).get("id")
console.log(id)
axios(`http://localhost:8080/users/${id}`)
.then((res)=>{
  inputName.value=res.data.fristName;
  inputEmail.value=res.data.email
  myform.addEventListener("submit",function(e){
    e.preventDefault()
    let editUser={
      fristName:inputName.value,
      email:inputEmail.value
    }
    axios.patch(`http://localhost:8080/users/${id}`,editUser)
    window.location="index.html"
  })
})