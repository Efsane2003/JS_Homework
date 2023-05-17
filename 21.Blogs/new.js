let blogInput = document.querySelector(".blogInput");
let myform = document.querySelector(".myForm");
let textArea = document.querySelector(".textArea");
let select = document.querySelector(".select");
let autherName;

select.addEventListener("change", function (e) {
  console.log(e.target.value);
  autherName = e.target.value;
});
myform.addEventListener("submit", function (e) {
  console.log("bh");
  e.preventDefault();
  let obj = {
    title: blogInput.value,
    body: textArea.value,
    author: autherName || "Lorem",
  };

  console.log(obj);
  axios.post("http://localhost:8080/blogs/", obj).then(() => {
    window.location = "home.html";
  });
});

let id=new URLSearchParams(window.location.search).get("id")
console.log(id)
axios(`http://localhost:8080/blogs/${id}`)
.then((res)=>{
    blogInput.value=res.data.title,
    textArea.value=res.data.body,
    myform.addEventListener("submit", function (e) {
        console.log("bh");
        e.preventDefault();
        let obj = {
          title: blogInput.value,
          body: textArea.value,
          author: autherName || "Lorem",
        };
      
        console.log(obj);
        axios.post("http://localhost:8080/blogs/", obj).then(() => {
          window.location = "home.html";
        });
      })
})
