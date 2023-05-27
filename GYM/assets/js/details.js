let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/cards";

let row = document.querySelector(".row");
async function detailsData() {
  const res = await axios(`${BASE_URL}/${id}`);
  const obj = await res.data;
  row.innerHTML = `
    <span class="col col-6">
            <div class="card">
              <div class="card-img">
                <img src="${obj.img}" alt="" />
              </div>
              <h4><i>TITLE: </i>${obj.title}</h4>
              <p>
               <i>Info:</i> ${obj.info}
              </p>
              <i><p>Price:${obj.price}</p></i>
              
          </span>
    `;
}
detailsData();
