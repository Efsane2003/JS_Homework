let card = document.querySelector("#card");
let searchinput = document.querySelector(".form-control");
let spinner = document.querySelector("#loading");

function allCard(arr) {
  card.innerHTML = "";
  arr.forEach((el) => {
    card.innerHTML += `
    <div class="col col-xl-3 col-md-4 col-sm-12 d-flex justify-content-center mb-3">
          <a href="details.html?name=${el.name}"
            ><div class="card" style="width: 18rem">
              <img src="${el.flags?.svg}" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">${el.name}</h5>
                <p class="card-text">Population:${el.population}</p>
                <p class="card-text">Region:${el.region}</p>
                <p class="card-text">Capital:${el.capital}</p>
              </div>
            </div></a
          >
        </div>
    `;
  });
}
axios("https://restcountries.com/v2/all").then((res) => allCard(res.data));
// spinner
window.onload = function () {
  card.innerHTML = "";
  spinner.style.display="flex"
  axios("https://restcountries.com/v2/all").then((res) => {
    // console.log(res.data)
    spinner.style.display = "none";
    allCard(res.data);
  });
};


searchinput.addEventListener("input", function (e) {
  spinner.style.display="flex"
  axios("https://restcountries.com/v2/all").then((res) => {
    let filteredData = res.data.filter((item) =>
      item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    // console.log(filteredData);
    spinner.style.display = "none";
    allCard(filteredData);
  });
});
