let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/cards";
let allInputs = document.querySelectorAll(".form-control");
let submitBtn = document.querySelector("#submit");
let form = document.querySelector("form");

if (id) {
  axios(`${BASE_URL}/${id}`).then((res) => {
    // allInputs[0].value=res.data.img,
    (allInputs[1].value = res.data.title),
      (allInputs[2].value = res.data.info),
      (allInputs[3].value = res.data.price);
  });
  submitBtn.innerHTML = "EDIT";
}
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  let obj = {
    img: `./assets/img/${allInputs[0].value.split("\\")[2]}`,
    title: allInputs[1].value,
    info: allInputs[2].value,
    price: allInputs[3].value,
  };
  if (!id) {
    await axios.post(`${BASE_URL}`, obj);
    window.location = "index.html";
  } else {
    await axios.patch(`${BASE_URL}/${id}`, obj);
    window.location = "index.html";
  }
});
