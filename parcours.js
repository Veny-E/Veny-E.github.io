document.addEventListener("DOMContentLoaded",() => {

const descriptions={
    "picture-formation/diwan_tregon.1":"J'effectue ma primaire dans les écoles bretonnantes du réseau Diwan",
    "picture-formation/collège_stma.png":"Obtention du Brevet des collèges avec mention très bien",
    "picture-formation/lycée_stjo.avif":"Première : Maths/Physique/LLCE | Terminale : Maths/Physique | Obtention du baccalauréat mention très bien avec félicitations du jury ",
    "picture-formation/ensibs_lorient.jpg":"Préparation intégrée à l'ensibs, sous le cursus SNIO, où nous acquérons diverses compétences générales telles que des notions en C/Python/HTML/CSS/JS ou encore en mécanique, électronique...   ",
    "picture-formation/ensibs_vannes.jpg":"Entrée dans le cycle ingénieur parcours informatique et cybersécurité ",
    
};




const zone=document.getElementById("description-text");
document.addEventListener("click",(e)=>{
    const nom = e.target.getAttribute("src");
    zone.textContent=descriptions[nom] || "cliquer sur une image" ;


})



});