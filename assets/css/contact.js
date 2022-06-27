var valid = document.getElementById('Bouton_envoi');
var prenom = document.getElementById('prenom');
var missPrenom = document.getElementById('missPrenom');
var nom = document.getElementById('nom');
var missNom = document.getElementById('missNom');
var CP = document.getElementById('CP');
var missCP = document.getElementById('missCP');
var adresse = document.getElementById('adresse');
var missAdresse = document.getElementById('missAdresse');
var ville = document.getElementById('ville');
var missVille = document.getElementById('missVille');
var email = document.getElementById('email');
var missEmail = document.getElementById('missEmail');
var text_valid = /[A-Za-z]/;


valid.addEventListener('click', control);


function control(e)

{

if (prenom.validity.valueMissing)

{

        e.preventDefault();
        missPrenom.textContent = 'Prénom manquant';
        missPrenom.style.color = 'red';

}


else if(text_valid.test(prenom.value) == false)

{

    e.preventDefault();
    missPrenom.textContent = 'Format incorrect';
    missPrenom.style.color = 'orange';

}

else

{

    missPrenom.textContent = '';

}





if (nom.validity.valueMissing)

{

        e.preventDefault();
        missNom.textContent = 'Nom manquant';
        missNom.style.color = 'red';

}


else if(text_valid.test(nom.value)==false)

{

    e.preventDefault();
    missNom.textContent='Format incorrect';
    missNom.style.color='orange';

}

else

{

    missNom.textContent = '';

}





var text_valid = /^[0-9]*$/;

if (CP.validity.valueMissing)

{

        e.preventDefault();
        missCP.textContent = 'Prénom manquant';
        missCP.style.color = 'red';

}


else if(text_valid.test(CP.value) == false)

{

    e.preventDefault();
    missCP.textContent = 'Format incorrect';
    missCP.style.color = 'orange';

}

else

{

    missCP.textContent = '';

}





if (adresse.validity.valueMissing)

{

        e.preventDefault();
        missAdresse.textContent = 'Adresse manquante';
        missAdresse.style.color = 'red';

}


else if(text_valid.test(CP.value) == false)

{

    e.preventDefault();
    missAdresse.textContent = 'Format incorrect';
    missAdresse.style.color = 'orange';

}

else

{

    missAdresse.textContent = '';

}





if (ville.validity.valueMissing)

{

    e.preventDefault();
    missVille.textContent = 'Ville manquante';
    missVille.style.color = 'red';

}

else if (text_valid.test(ville.value) == flase)

{

    e.preventDefault();
    missVille.textContent = 'Format incorrect';
    missVille.style.color = 'orange';

}

else 

{

    missVille.textContent = '';

}





if (email.validity.valueMissing)

{

    e.preventDefault();
    missEmail.textContent = 'Email manquant';
    missEmail.style.color = 'red';

}

else if (text_valid.test(email.value) == false)

{

    e.preventDefault();
    missEmail.textContent = 'Format incorrect';
    missEmail.style.color = 'orange';

}

else

{

    missEmail.textContent = '';

}

}
