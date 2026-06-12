

let app=document.getElementById("app");

let title= document.createElement("h2")
title.placeholder="Signup";

let username= document.createElement("input")
username.placeholder= "Enter username";


let email= document.createElement("input")
email.placeholder="Enter E-mail";


let password= document.createElement("input")
password.placeholder="Enter Password: ";
password.type="Password"


let mssg= document.createElement("p")


let btn= document.createElement("button")

btn.innerText="Signup ->"

btn.addEventListener("click",function(){

    // let user = username.value;
    // let pass = password.value;
    // let mail = email.value;

    username.value = "Krish";
    email.value = "krish@example.com";
    password.value = "xyz123";

    

    if (mssg.innerText = `Username: ${user} | Email: ${mail} | Password: ${pass}`){
        mssg.innerText = "Login succesfully";
    } else{user ==="" || pass ==="" || mail ==="";
    mssg.innerText = "Please fill all fields";
}
    
    
    // else {
    //     mssg.innerText =
    //         "Username: " + user + " | Email: " + mail + " | Password: " + pass;
    // }

})




//append all in page

app.appendChild(title);
app.appendChild(username);
app.appendChild(document.createElement("br"));
app.appendChild(email);
app.appendChild(document.createElement("br"));
app.appendChild(password);
app.appendChild(document.createElement("br"));
app.appendChild(btn);
app.appendChild(mssg);


//applying css
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.backgroundColor = "lightblue";

let cont = document.getElementById("cont");
cont.style.width = "20vw";
cont.style.height = "50%";
cont.style.display = "flex";
cont.style.flexDirection = "column";
cont.style.alignItems = "center";
cont.style.backgroundColor = "red";