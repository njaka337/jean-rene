// if(confirm("Êtes vous en classe de Terminal ?")){
//     let res = prompt("Entrer la code de vérification");
//     if(res==110199){
//         alert("HELLO");
//     }
//     else{
//         window.close()
//     }
// }

lien = document.querySelector("a");
lien.addEventListener("click", linked, false);

function linked(){
    if(lien.getAttribute("href")=="#"){
        alert("VIDE");
    }
}