const button = document.querySelector(".btn1");
const store = document.querySelector(".store");

button.addEventListener("click", () => {
  const input = document.querySelector(".text1");

  if (input.value == "") {
    alert("Please save your Tasks today!");
  } else {
    const li = document.createElement("li");
    store.appendChild(li);
    li.innerHTML = input.value;
    input.value = "";
    li.addEventListener("click", () => {
      store.removeChild(li);
    });
  }
});
