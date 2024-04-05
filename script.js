//Lager overskrift for å informere brukeren 
let overskrift = document.CreateElement("h1");
let overskriftInnhold = document.createTextNode("Regn ut om du har nok snitt for å komme inn på ditt studiepoeng")

//Lager tre brukerinputt
let snitt = document.CreateElement("value");
snitt.setAttribute("style", "50px");
snitt.setAttribute("min", "0");
document.body.appendChild(snitt);

let tillegspoeng = document.CreateElement("value");
tillegspoeng.setAttribute("style", "50px");
tillegspoeng.setAttribute("min", "0");
document.body.appendChild(tillegspoeng);

let grense = document.CreateElement("value");
grense.setAttribute("style", "50px");
grense.setAttribute("min", "0");
document.body.appendChild(grense);

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

