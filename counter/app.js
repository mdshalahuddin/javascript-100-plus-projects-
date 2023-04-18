let value = 0;

document.getElementById('plus').addEventListener('click', function () {
    value += 1;
    document.getElementById("count").innerText = value;
})

document.getElementById('minus').addEventListener('click', function () {
    value -= 1;
    document.getElementById("count").innerText = value;
})