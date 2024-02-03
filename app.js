var displayInput = document.getElementById("displayInput");
function getVal(val) {
    console.log(val);
    displayInput.value += val;
}

function calculate() {
    var a = displayInput.value;
    a = eval(a)
    console.log(a);
    displayInput.value = a;
}

function clearAll() {
    displayInput.value = "";
}