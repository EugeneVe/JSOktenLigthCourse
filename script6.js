const newName = document.getElementById("firstName");
const newSuranme = document.getElementById("lastName");
const newAge = document.getElementById("age");
const newBtn = document.getElementById("saveBtn");

let flag = true;
newBtn.disabled = true;

btnOff = () => {
  newName.value.length < 1 || newSuranme.value.length < 1 || newAge.value.length < 1 ? (newBtn.disabled = true) : (newBtn.disabled = false);
};
newName.addEventListener("input", () => {
  btnOff();
});
newSuranme.addEventListener("input", () => {
  btnOff();
});
newAge.addEventListener("input", () => {
  btnOff();
});

newBtn.addEventListener("click", () => {
  if (flag) {
    let newString = document.createElement("div");
    newString.className = "result_wrap";
    newString.innerHTML = `
    <p>${newName.value}</p><p>${newSuranme.value}</p><p>${newAge.value}</p>`;
    document.body.appendChild(newString);
    newBtn.classList.add("btn-danger");
    newBtn.textContent = "RESET";
  } else {
    newName.value = "";
    newSuranme.value = "";
    newAge.value = "";
    newBtn.classList.toggle("btn-danger");
    newBtn.classList.add("btn-primary");
    newBtn.textContent = "SAVE";
    newBtn.disabled = true;
  }
  flag = !flag;
});
