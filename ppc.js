function playGame() {
    const choices = ["Pierre", "Papier", "Ciseaux"];
    const playerChoice = document.getElementById("playerChoice").value;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const result = determineWinner(playerChoice, computerChoice);
    const message = `Vous avez choisi ${playerChoice}. L'ordinateur a choisi ${computerChoice}. Résultat : ${result}`;
    document.getElementById("result").textContent = message;
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Égalité !";
    } else if (
        (playerChoice === "Pierre" && computerChoice === "Ciseaux") ||
        (playerChoice === "Papier" && computerChoice === "Pierre") ||
        (playerChoice === "Ciseaux" && computerChoice === "Papier")
    ) {
        return "Vous avez gagné !";
    } else {
        return "L'ordinateur a gagné !";
    }
}