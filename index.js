

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "1234" && password == "1234") {
       
        window.location.href = "https://bharathiiasacademy.com/resources/";
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}



