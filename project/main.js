
// function Adddata (){
//     let value = document.getElementById("name").value;
//     localStorage.setItem("User", value);
//     // console.log(); 
// }
function Adddata() {
    let value = document.getElementById("name").value;
    let users = JSON.parse(localStorage.getItem("Users")) || [];
    users.push(value);
    localStorage.setItem("Users", JSON.stringify(users));

}