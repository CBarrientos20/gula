const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const parrafo= document.getElementById("warnings");

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = "";
    let enter= false;
    parrafo.innerHTML= "";
    if(password.value.length <8){
        warnings += "password should be bigger than 8";
        enter= true;
    }

    if(enter){
        parrafo.innerHTML = warnings
    }
})