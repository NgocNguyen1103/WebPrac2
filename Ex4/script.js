let user = document.getElementById("username")
let pass = document.getElementById("pass")
let re_pass = document.getElementById("repass")
let welcome = document.getElementById("signup")
let alert = document.getElementById("alert")
function signup() {
    if (pass.value === re_pass.value) {
        welcome.textContent = `Welcome ${user.value}`
    }
    else {
        console.log(alert);
    }


}