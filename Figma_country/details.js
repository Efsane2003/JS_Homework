let name = new URLSearchParams(window.location.search).get("name");
let row = document.querySelector("#row");
axios(`https://restcountries.com/v3.1/name/${name}`).then(
  (res) => {
    row.innerHTML=`
    <div class="col col-10">
                    <div class="card" style="width: 18rem">
                       <div class="images">
                         <img src="${res.data[0].flags?.svg}" class="card-img-top" alt="..." /></div>
                        <div class="card-body">
                          <h5 class="card-title">${res.data[0].name.common}</h5>
                          <p class="card-text">Population:${res.data[0].population}</p>
                          <p class="card-text">Region:${res.data[0].region}</p>
                          <p class="card-text">Capital:${res.data[0].capital}</p>
                        </div>
                      </div>
                </div>
    `
  }
  // console.log(res.data)
);
console.log(name);
