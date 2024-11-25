const loginForm = document.getElementById("loginform");
const loginButt = document.getElementById("loginButton");

loginButt.addEventListener("click", (e) => {
    e.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if(email === "jaeceebanzuela.parino@gmail.com" && password === "passwordKo"){
        alert("Log-in Successful");
        window.location.href = 'welcome.html';
    }

    else{
        alert("Error.");
    }
})