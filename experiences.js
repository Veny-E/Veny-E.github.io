function stage(Id){
    var image,texte;

    if(Id=="Mieres"){
        image="pictures/mieres_logo.png";
        text="etx";
    }
    else if (Id=="Chat"){
        image="pictures/chat_miro.jpeg";
        text="Lorem14";
    }
    else if(Id=="Geek"){
        image="pictures/geek_avenue.jpeg";
        text="Lorem145";
    }
    else if (Id=="Méninge"){
        image="pictures/remue_meninge.png";
        text="ceci est un test";
    }

    document.getElementById('monImage').src = image;
    document.getElementById('monImage').style.opacity=1;
    document.getElementById('texte-explication-stage').innerHTML=text;
    document.getElementById('texte-explication-stage').style.opacity=1;
}

