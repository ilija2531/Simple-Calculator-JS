let x;
let y;
let z;


document.getElementById("presmetaj").onclick = function(){
    x = document.getElementById("prvbroj").value;
    x=Number(x);
    y = document.getElementById("vtorbroj").value;
    y=Number(y);
    if(document.getElementById("sobiranje").checked) {
        z = x + y;
        document.getElementById("rez").innerHTML = " Rezultat: " + z;
    
    }
    else if(document.getElementById("odzemanje").checked){
        z = x - y;
        document.getElementById("rez").innerHTML = " Rezultat: " + z;
    }
    else if(document.getElementById("mnozenje").checked) {
        z = x * y;
        document.getElementById("rez").innerHTML = " Rezultat: " + z;
    } 
    else if(document.getElementById("delenje").checked ) {
        z = x / y;
        document.getElementById("rez").innerHTML = " Rezultat: " + z;
    }
    else{
        console.log("Ne postoi takva operacija");
    }
    
} 