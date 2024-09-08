function incrementComputerScore() {
    let currentScore = parseInt(document.getElementById("comp_score").innerHTML, 10);
    document.getElementById("comp_score").innerHTML = currentScore + 1;
}

function incrementYourScore() {
    let currentScore = parseInt(document.getElementById("your_score").innerHTML, 10);
    document.getElementById("your_score").innerHTML = currentScore + 1;
}




const checkwinner = (param1) => {
    let choices = ["s", "w", "g"]
    let comp_choice = choices[Math.floor(Math.random() * 3)]
    let player_choice = param1
    let comp_score = 0
    let player_score = 0
    console.log(`Computer choice is ${comp_choice}`)
    console.log(`Your Choice is ${player_choice}`)
    if ((player_choice == "s" & comp_choice == "w") | (player_choice == "w" & comp_choice == "g") | (player_choice == "g" & comp_choice == "s")) {
        console.log("You wins")
        incrementYourScore()
    }
    else if((player_choice == "w" & comp_choice == "s") | (player_choice == "g" & comp_choice == "w") | (player_choice == "s" & comp_choice == "g")) {
        console.log("Computer wins")
        incrementComputerScore()
    }
    else{
        console.log("Draw")
    }
}


let button = document.querySelectorAll(".btn")
button.forEach((ele) => {
    ele.addEventListener("click", () => {
        pl_choice = ele.innerHTML[0].toLowerCase()
        checkwinner(pl_choice)
    })
})




