//Question: 1

//Finner 'form' på siden og legger til en event når jeg 'submit' form (sender in dataen)
const form = document.querySelector("#contactForm");
form.addEventListener("submit", validateForm);

//Funksjonen vi laget event til
function validateForm(event) {

    //Forhindrer at siden lastes inn på nytt når jeg sender in formen (skjema)
    event.preventDefault();
    console.log("The form was submitted");

    //Finner 'firstName' med ID og 'firstNameError'
    const firstName = document.querySelector("#firstName");
    const firstNameError = document.querySelector("#firstNameError");

    //Sjekker med funksjon 'checkInputLenght' at 'firstName' verdien er mer en (2) ( på funksjonen neste)
    if (checkInputLength(firstName.value) === true) {
        firstNameError.style.display = "none"; //gjemmer feilmeldingen
    } else {
        firstNameError.style.display = "block"; //viser feilmeldingen om funksjonen returnerer 'false'
    }
}

//Funksjon for å sjekke at verdien på input i boksen på siden er mer en 2 bokstaver lang
function checkInputLength(value) {

    //Fjerner evt mellomrom som bruker kan ha lagt til etter de har skrevet 'firstName'.
    const trimmedValue = value.trim();

    //Sjekker at verdien er mer en 2, hvis ikke returnerer funksjonen 'false' ellers 'true'
    if (trimmedValue.length > 2) {
        return true;
    } else {
        return false;
    }
}