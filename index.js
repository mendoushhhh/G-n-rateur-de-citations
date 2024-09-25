//1) une variable pour récupérer depuis mon html u, le composant qui porte l'id 'nom' ou autre ,on récupère notre composant, on importe nos élement duhtml au js  grace au get elementbyid
const jsonFilePath = 'fichier.json';
let text =  document.getElementById("nom");
let btn = document.getElementById("btn");
let image = document.getElementById("image");
let citation = document.getElementById("citation");
// va permettre de modifier le contenu de cette balise
text.innerText = "coucou c'est graven";

// 2)on créer l'evenement lors du click du bouton "générer" et donc a ce clique du bouton on créer une fonction !


btn.addEventListener ( 'click', UpdatePage);
// quand on va cliquer sur le bouton cela va générer cette focntion que l'on a nous même nommé updatepage
function UpdatePage() {

    text.innerText = "Bill Gates";
    citation.innerText = "le logiciel est une excellente combinaison entre l'art et la manière";
    image.setAttribute('src', "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQJ3_gwBm46PiEvDcxVtSq2qNnnw3p0FhOdHo3AemEydE0dB_uD");

}


