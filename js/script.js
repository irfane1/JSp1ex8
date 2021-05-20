function afficher(){
    var age;
    age = Number(document.getElementById("age").value);
    if(age < 18)
    {
    alert("Vous êtes mineur");
    }
    else
    {
    alert("Vous êtes adulte");
    }  
}