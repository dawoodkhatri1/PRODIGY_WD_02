// Function to handle player's move (X)
function playerMove(id) {
    var button = document.getElementById(id);
    if (button.value === "") { 
        button.value = "X";
        button.disabled = true; 
        if (!checkWin("X")) { 
            aiMove();
        }
    }
}

// Function to simulate AI's move (0)
function aiMove() {
    var buttons = document.querySelectorAll("input[type='button']:not([disabled])");
    if (buttons.length > 0) {
        var randomButton = buttons[Math.floor(Math.random() * buttons.length)];
        randomButton.value = "0";
        randomButton.disabled = true; 
        checkWin("0");
    }
}

// Function to check if a player has won
function checkWin(player) {
    var b1 = document.getElementById("b1").value;
    var b2 = document.getElementById("b2").value;
    var b3 = document.getElementById("b3").value;
    var b4 = document.getElementById("b4").value;
    var b5 = document.getElementById("b5").value;
    var b6 = document.getElementById("b6").value;
    var b7 = document.getElementById("b7").value;
    var b8 = document.getElementById("b8").value;
    var b9 = document.getElementById("b9").value;

    // Define win conditions
    var winConditions = [
        [b1, b2, b3],
        [b4, b5, b6],
        [b7, b8, b9],
        [b1, b4, b7],
        [b2, b5, b8],
        [b3, b6, b9],
        [b1, b5, b9],
        [b3, b5, b7]
    ];

    // Check if any win condition is met
    for (var i = 0; i < winConditions.length; i++) {
        var condition = winConditions[i];
        if (condition[0] === player && condition[1] === player && condition[2] === player) {
			document.getElementById('print')
            .innerHTML = player + " wins!";
            return true;
        }
    }

    // Check for a tie
    if (document.querySelectorAll("input[type='button']:not([disabled])").length === 0) {
        document.getElementById('print')
        .innerHTML = "It's a tie!";
        return true;
    }

    return false;
}

// Function to reset game 
function myfunc_2() {
    location.reload();
    b1 = b2 = b3 = b4 = b5 = b6 = b7 = b8 = b9 = '';
}