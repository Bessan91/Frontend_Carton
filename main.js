function increFirst() {
    let counterInput = document.getElementById("counter");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
}
function decFirst() {
    let counterInput = document.getElementById("counter");
    let currentValue = parseInt(counterInput.value);
    if (currentValue - 1 < 0) {
        alert("Can't be less than 0");
    } else {
        counterInput.value = currentValue - 1;
    }
}


function StartAgain(){
    let counterInput = document.getElementById("counter");
    counterInput.value = 0;
}

// =============================================

function incresec() {
    let counterInput = document.getElementById("counter2");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
}

function decsec() {
    let counterInput = document.getElementById("counter2");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue - 1;
    if (currentValue - 1 < 0) {
        alert("Can't be less than 0");
    } else {
        counterInput.value = currentValue - 1;
    }
}
function StartAgain2(){
    let counterInput = document.getElementById("counter2");
    counterInput.value = 0;
}

// ================================================

function increThierd() {
    let counterInput = document.getElementById("counter3");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
}

function decThierd() {
    let counterInput = document.getElementById("counter3");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue - 1;
    if (currentValue - 1 < 0) {
        alert("Can't be less than 0");
    } else {
        counterInput.value = currentValue - 1;
    }
}
function StartAgain3(){
    let counterInput = document.getElementById("counter3");
    counterInput.value = 0;
}
// ============================================

function increFourth() {
    let counterInput = document.getElementById("counter4");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue + 1;
}

function decFourth() {
    let counterInput = document.getElementById("counter4");
    let currentValue = parseInt(counterInput.value);
    counterInput.value = currentValue - 1;
    if (currentValue - 1 < 0) {
        alert("Can't be less than 0");
    } else {
        counterInput.value = currentValue - 1;
    }
}
function StartAgain4(){
    let counterInput = document.getElementById("counter4");
    counterInput.value = 0;
}
// ============================
