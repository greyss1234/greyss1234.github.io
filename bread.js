function servings01() {
    document.getElementById("water1").innerHTML = "Lukewarm water (900mL)"
    document.getElementById("salt").innerHTML = "Salt (1 1/2TBSP)"
    document.getElementById("ryeflour").innerHTML = "Rye flour (500g)"
    document.getElementById("whiteflour").innerHTML = "All-purpose flour (375g)"
    document.getElementById("water2").innerHTML = "Lukewarm water (250mL)"
    document.getElementById("ryekernels").innerHTML = "Rye kernels (500g)"
}

function servings02() {
    document.getElementById("water1").innerHTML = "Lukewarm water (1750mL)"
    document.getElementById("salt").innerHTML = "Salt (3TBSP)"
    document.getElementById("ryeflour").innerHTML = "Rye flour (1000g)"
    document.getElementById("whiteflour").innerHTML = "All-purpose flour (750g)"
    document.getElementById("water2").innerHTML = "Lukewarm water (500mL)"
    document.getElementById("ryekernels").innerHTML = "Rye kernels (1000g)"
}

function commenting() {
    document.getElementById("hsy").innerHTML = "Your Username"
  let x = document.getElementById("kdj").value;
  document.getElementById("yjh").innerHTML = x;
}

function rating() {
  let y = document.getElementById("jhw").value;
  document.getElementById("lhs").innerHTML = "(Rating: " + y + ")";
}
