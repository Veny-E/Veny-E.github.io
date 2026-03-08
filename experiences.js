function stage(Id){
    var image,texte;

    if(Id=="Mieres"){
        image="pictures/mieres_logo.png";
        text="En 2024, j'ai effectué lors des vacances de la Toussaint un stage d'observation dans l'entreprise Mieres IT à tregunc. Là, j'ai eu l'occasion d'obsverer les différentes missons d'une équipe de dévelopement informatique de découvrir les différents outils employés et d'essayer par moi-même certains outils. Ce stage ma conforté dans l'idée de travailler dans le domaine informatique. ";
    }
    else if (Id=="Chat"){
        image="pictures/chat_miro.jpeg";
        text="En 2022, J'ai effectué un stage dans la librairie le chat miro. A cette occasion j'ai pû consolider mon expériences professionnelleset mes compétences en matière d'organisation, de gestion d'inventaire et d'utilisation des différents logiciels qui servent à l'encaissement. ";
    }
    else if(Id=="Geek"){
        image="pictures/geek_avenue.jpeg";
        text="En 2023, J'ai effectué un stage dans la boutique Geek Avenue. Ainsi j'ai découvert un autre aspect du métier de la ventre. Notamment la gestion de livraison et d'envoi de colis.   ";
    }
    else if (Id=="Méninge"){
        image="pictures/remue_meninge.png";
        text="En 2022, j'ai effectué un stage dans la boutique le Remue Meninge. Là j'ai découvert la gestion d'une boutique indépendante, la gestion d'inventaire, la relation et la fidélisation clients. J'ai aussi pû aider à la mise en place du service ludothèque proposé par la boutique. ";
    }

    document.getElementById('monImage').src = image;
    document.getElementById('monImage').style.opacity=1;
    document.getElementById('texte-explication-stage').innerHTML=text;
    document.getElementById('texte-explication-stage').style.opacity=1;
}

