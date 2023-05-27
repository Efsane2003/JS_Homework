const BASE_URL = "http://localhost:8080/cards";
let row = document.querySelector(".row");
let sortBtn = document.querySelector("#sortBtn");
let searchInput = document.querySelector(".form-control");
let loadMore = document.querySelector("#loadMore");
let menuIcon = document.querySelector("#menuIcon");
let nav=document.querySelector("nav")

let copyArr = [];
let filtereddata = [];
let maxLength = 3;
async function getAllCards() {
  const res = await axios(BASE_URL);
  const data = res.data;
  copyArr = data;
  filtereddata =
    filtereddata.length || searchInput.value
      ? filtereddata.slice(0, maxLength)
      : data.slice(0, maxLength);
  row.innerHTML = "";
  filtereddata.forEach((el) => {
    row.innerHTML += `
        <span class="col-12 col-md-12 col-lg-4 my-3">
            <div class="card">
              <div class="card-img">
                <img src="${el.img}" alt="" />
              </div>
              <h4>${el.title}</h4>
              <p>
                ${el.info}
              </p>
              <i><p>Price:${el.price}</p></i>
              <a href="details.html?id=${el.id}">VIEW DETAILS</a>
              <div>
              <a ><i class="fa-solid fa-basket-shopping" onclick=favoriteData("${el.id}",this)></i></a>
              <a href="add-edit.html?id=${el.id}"><i class="fa-solid fa-pen-to-square"></i></a>
              <a><i class="fa-solid fa-trash"onclick=deleteCard("${el.id}",this)></i></a></div>
            </div>
          </span>
        `;
  });
}
getAllCards();
// delete
async function deleteCard(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("span").remove();
}
// search
searchInput.addEventListener("input", function (e) {
  filtereddata = copyArr
    .slice(0, maxLength)
    .filter((item) =>
      item.title
        .toLocaleLowerCase()
        .includes(e.target.value.toLocaleLowerCase())
    );
  getAllCards()
});


// sort

sortBtn.addEventListener("click",function(){
    if(this.innerHTML=="Asscending"){
        filtereddata=filtereddata.sort((a,b)=>a.price-b.price)
        getAllCards()
        this.innerHTML="Descending"
    }else if(this.innerHTML=="Descending"){
        filtereddata=filtereddata.sort((a,b)=>b.price-a.price)
        getAllCards()
        this.innerHTML="Default"
    }else{
        filtereddata=copyArr
        getAllCards()
        this.innerHTML="Asscending"
    }
})
// loadmore
loadMore.addEventListener("click",function(){
    maxLength+=3
    filtereddata=copyArr.slice(0,maxLength)
    getAllCards()
})
// favorite
 async function favoriteData(id){
    const res=await axios(`${BASE_URL}/${id}`)
    const obj=await res.data
    await axios.post(`http://localhost:8080/favorited`,obj)
 }
// menuIcon
menuIcon.addEventListener("click",function(){
   nav.classList.toggle("show")
   this.classList.contains("fa-bars")
   ?(this.classList="fa-solid fa-xmark")
   :(this.classList="fa-solid fa-bars")
})
