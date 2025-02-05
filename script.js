const messages = [
    "Estas segura?",
    "Realmente segura???",
    "Piensalo de nuevo ratita",
    "Piensalo vv",
    "Si?????",
    "Si dices que no me pondre triste",
    "Muy triste...",
    "Di que si veeeeee ",
    "Esta bien, entonces no...",
    "Mentira, di que sí rata mañosa.❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}