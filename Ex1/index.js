function CtoF(ctemp) {
    let ftemp = (ctemp * 9 / 5) + 32;
    return ftemp;
}

function FtoC(ftemp) {
    let ctemp = (ftemp - 32) * 5 / 9;
    return ctemp;
}

let temp = document.getElementById("temp")
let degree = document.getElementById("degree")
let title = document.getElementById("Converter")

function pritTI() {
    if (degree.value === "c" || degree.value === "C") {
        title.textContent = `${CtoF(temp.value)} F`;
    }
    else if (degree.value === "f" || degree.value === "F") {
        title.textContent = `${FtoC(temp.value)} C`;
    }
    else {
        console.log("incorrect degree");

    }
}



