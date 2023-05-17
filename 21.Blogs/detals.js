let id=new URLSearchParams(window.location.search).get("id")
console.log(id)
let card=document.querySelector(".card")
axios(`http://localhost:8080/blogs/${id}`)
.then((res)=>{
    card.innerHTML=`
    <div>
    <h3>Blog Title:${res.data.title}</h3>
    <p>${res.data.body}</p>
    <p><span>Author:${res.data.author}</span></p>
    </div>
    `
})