// Lager overskrift for å informere brukeren 
let overskrift = document.createElement("h1");
overskrift.textContent = "Regn ut om du har nok snitt for å komme inn på ditt studiepoeng";
document.body.appendChild(overskrift);

// Lager tre brukerinputt
let snitt = document.createElement("input");
snitt.setAttribute("style", "width: 100px");
snitt.setAttribute("min", "0");
document.body.appendChild(snitt);

let tillegspoeng = document.createElement("input");
tillegspoeng.setAttribute("style", "width: 50px");
tillegspoeng.setAttribute("min", "0");
document.body.appendChild(tillegspoeng);

let grense = document.createElement("input");
grense.setAttribute("style", "width: 50px");
grense.setAttribute("min", "0");
document.body.appendChild(grense);

function buttonClick() {
    let tall1 = parseFloat(snitt.value);
    let tall2 = parseFloat(tillegspoeng.value);
    let sammenlign = parseFloat(grense.value);
    let brukerpoeng = (tall1 * 10) + tall2;

    if (brukerpoeng < sammenlign) {
        document.getElementById("resultatMindre").textContent = "Du er for dårlig, ha det taper!";
    } else if (brukerpoeng === sammenlign) {
        document.getElementById("resultatErlik").textContent = "Du klarte det akkurat, prøv bedre neste gang ...";
    } else {
        document.getElementById("resultatStørre").textContent = "Ja! Yippie! Wie cool ist das bitte?!";
    }
}

// Button
let button = document.createElement("button");
button.innerHTML = "Studieplass?";
button.onclick = buttonClick;
document.body.appendChild(button);
