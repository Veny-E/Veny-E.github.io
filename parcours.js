document.addEventListener("DOMContentLoaded",() => {

const descriptions={
    "picture-formation/diwan_tregon.1":"fac droit",
    "picture-formation/collège_stma.png":"fac lettre",
    "picture-formation/lycée_stjo.avif":"SSI lorient",
    "picture-formation/ensibs_lorient.jpg":"Ecole d'ingénieur",
    "picture-formation/ensibs_vannes.jpg":"IUt a vannes",
    
};

const zone=document.getElementById("description-text");
document.addEventListener("click",(e)=>{
    const nom = e.target.getAttribute("src");
    zone.textContent=descriptions[nom] || "cliquer sur une image" 

})



});