function addNewWEField(){
    //console.log("Adding a new file");


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("we");
    let weAddbuttonOb = document.getElementById("weAddbutton");

    weOb.insertBefore(newNode, weAddbuttonOb);
}

function addNewAQField(){

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");

    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder', 'Enter here');

    let weOb = document.getElementById("aq");
    let weAddbuttonOb = document.getElementById("aqAddbutton");

    weOb.insertBefore(newNode, weAddbuttonOb);
}


// Generating Resume

function generateresume(){
    //console.log('loding');

    let nameField = document.getElementById('nameField').value;
    let nameT1 = document.getElementById('nameT1');

    nameT1.innerHTML = nameField;
// Direct
document.getElementById('nameT2').innerHTML = nameField;

// Contact
 let ContactField = document.getElementById('ContactField').value;
 let contactT = document.getElementById('contactT');

 contactT.innerHTML = ContactField;

 //address
  document.getElementById("addressT").innerHTML = document.getElementById("AddressField").value;
 
// imprtantas links

document.getElementById("linkT").innerHTML = document.getElementById("LkField").value;

document.getElementById("gitT").innerHTML = document.getElementById("gitField").value;

document.getElementById("fbT").innerHTML = document.getElementById("fbField").value;

// OBJECTIVE

document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

// we

let wes = document.getElementsByClassName("weField");
let str ="";
for(let e of wes){
    str = str + `<li> ${e.value}</li>`;
    }
    document.getElementById("weT").innerHTML = str;

// AQ
    let aqs = document.getElementsByClassName("eqField");
    let str1 = "";

    for(let e of aqs){
        str1 += `<li> ${e.value} </li>`;
    }
    document.getElementById("aeT").innerHTML = str1;

    document.getElementById("CV-Form").style.display = "none";
    document.getElementById("Resume-Template").style.display = "block";

}
// PRINT RESUME
function printCV(){
    window.print();
}

