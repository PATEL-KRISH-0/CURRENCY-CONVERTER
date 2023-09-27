const output = document.querySelector(".output");
const submit = document.querySelector(".Submit");

submit.addEventListener("click", () => {
    const money = document.getElementById("money").value;
    output.textContent = `the indian rs ${money} is in us doller = ${money / 83.23}`
})

