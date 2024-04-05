//Lager tre brukerinputt
let snitt = document.CreateElement("Value");
snitt.setAttribute("style", "50px");
snitt.setAttribute("min", "0");
document.body.appendChild(snitt);

function buttonClick();
let tall1 = snitt.value;
let tall2 = tillegspoeng.value;
let sammenlign = grense.value;
let brukerpoeng = (snitt * 10) + tillegspoeng;

if brukerpoeng < grense:
let resultatMindre.innerHTML = "Du e for dårlig, ha det taper!";
if else brukerpoeng === grense:
let resultatErlik.innerHTML = "Du klarte det akkurat, prøv bedre neste gang ...";
else brukerpoeng > grense:
let resultatStørre.innerHTML = "Ja! Yippie! Wie cool ist das bitte?!";


//Button
let button = document.CreateElement("button");
button.innerHTML = "Studieplass?";
button.onclick = function(){
}
document.body.appendChild(button);

<input style="width:50px" min="0" value="0" type="number" id="antVoks"> 