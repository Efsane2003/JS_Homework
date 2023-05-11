let myform=document.querySelector("#myform")
let inputName=document.querySelector("#exampleInput")
let inputEmail=document.querySelector("#exampleInpuEmail")

// let row = document.querySelector(".row");

// async function listAllUsers() {
//     let response = await fetch("http://localhost:8080/users");
//     let data = await response.json();
//     // console.log(data)
//     data.forEach((obj) => {
//       row.innerHTML += `
//          <div class="col col-5">
//                   <div class="card ms-4" style="width: 18rem;">
//                       <div class="card-body">
//                         <h5 class="card-title">${obj.fristName}</h5>
//                         <p class="card-text">${obj.email}</p>
//                         <i class="fa-solid fa-trash"></i>
//                         <i class="fa-solid fa-pencil"></i>
//                       </div>
//                       </div>
//                     </div>
//           `;
//     });
//   }



// myform.addEventListener("submit",function(e){
//     e.preventDefault()
//     let obj={
//         fristName:inputName.value,
//         email:inputEmail.value
//     }
//     fetch("http://localhost:8080/users",{
//         method:"PUT",
//         headers:{
//             "Content-type":"application/json",
//         },
//         body:JSON.stringify(obj)
//     }).then(()=>{
//         listAllUsers()
//     })
//     window.location.href="http://127.0.0.1:5501/20.Mock_API/index.html"
// } )

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