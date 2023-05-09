let row = document.querySelector(".row");
let addBtn = document.querySelector(".btn-dark");
let editicon=document.querySelector(".fa-pencil")



//  add Button
addBtn.addEventListener("click", function () {
  window.location.href = "http://127.0.0.1:5501/20.Mock_API/adduser.html";
});






// card

async function listAllUsers() {
  let response = await fetch("http://localhost:8080/users");
  let data = await response.json();
  // console.log(data)
  data.forEach((obj) => {
    row.innerHTML += `
       <div class="col col-5">
                <div class="card ms-4" style="width: 18rem;">
                    <div class="card-body">
                      <h5 class="card-title">${obj.fristName}</h5>
                      <p class="card-text">${obj.email}</p>
                      <i class="fa-solid fa-trash" id="${obj.id}" onclick=deleteById(${obj.id})></i>
                      <i class="fa-solid fa-pencil" id="${obj.id}" onclick=editById(${obj.id}) ></i>
                    </div>
                    </div>
                    </div>
        `;
  });
}
listAllUsers();

// delete icon 
async function deleteById(id){
    await fetch(`http://localhost:8080/users/${id}`,{
        method:"DELETE"
    })
    console.log(id)
    listAllUsers()
}

// edit icon 
function editById(id){
    console.log(id)
    window.location.href="http://127.0.0.1:5501/20.Mock_API/edituser.html"
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
        
    // } )
}











