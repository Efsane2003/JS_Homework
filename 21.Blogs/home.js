let row=document.querySelector(".row")
function blogsData(arr){
    row.innerHTML=""
    arr.forEach(element => {
        row.innerHTML+=`
        <span class="col col-10 mb-4">
          <div class="card">
            <h3>${element.title}</h3>
            <b class=text>${element.body.slice(0,200)}...
            <a href="detals.html?id=${element.id}">Read More</a>
            </b>
            <p>written by <span>${element.author}</span></p>
            <div class="btn">
              <button class="deletebtn" onclick=deleteBlogs(${element.id},this)>Delete</button>
              <a class="edit" href="new.html?id=${element.id}")>Edit</a>
            </div>
          </div>
        </span>
        `
    });

}
axios("http://localhost:8080/blogs")
.then((res)=>blogsData(res.data))




function deleteBlogs(id, btn){
    axios.delete(`http://localhost:8080/blogs/${id}`)
    btn.closest("span").remove()
}
