const BASE_URL = "http://localhost:8080/favorited";
let row = document.querySelector(".row");
async function getAllcards() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  row.innerHTML = "";
  data.forEach((el) => {
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
              <div></div>
              <a><i class="fa-solid fa-trash"onclick=deleteCard("${el.id}",this)></i></a></div>
            </div>
          </span>
        `;
  });
}
getAllcards()
//  delet 
async function deleteCard(id,btn){
    await axios.delete(`${BASE_URL}/${id}`)
    btn.closest("span").remove()
}
