// Lager overskrift for å informere brukeren 
let overskrift = document.createElement("h1");
overskrift.textContent = "Regn ut om du har nok snitt for å komme inn på ditt studie";
document.body.appendChild(overskrift);

// Lager tre brukerinputt
let snitt = document.createElement("input");
snitt.setAttribute("type", "number");
document.body.appendChild(snitt);

let snittMarkering = document.createElement("label");
inner.HTML.snittMarkering = "Snitt";

let tilleggspoeng = document.createElement("input");
tilleggspoeng.setAttribute("type", "number");
document.body.appendChild(tilleggspoeng);

let tilleggsMarkering = document.createElement("label");
inner.HTML.tilleggsMarkering = "Tillegspoeng";

let grense = document.createElement("input");
grense.setAttribute("type", "number");
document.body.appendChild(grense);

let grenseMarkering = document.createElement("label");
inner.HTML.grensetMarkering = "Grense";

function buttonClick() {
    let tall1 = parseFloat(snitt.value);
    let tall2 = parseFloat(tilleggspoeng.value);
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
