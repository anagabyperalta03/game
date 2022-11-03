let letra = 0
basic.forever(function () {
    letra = randint(1, 3)
    if (letra == 1) {
        basic.showString("A")
        basic.clearScreen()
    } else if (letra == 2) {
        basic.showString("B")
        basic.clearScreen()
    } else if (letra == 3) {
        basic.showString("AB")
        basic.clearScreen()
    }
    if (letra == 1 && input.buttonIsPressed(Button.A)) {
        game.addScore(1)
    } else if (letra == 2 && input.buttonIsPressed(Button.B)) {
        game.addScore(1)
    } else if (letra == 3 && input.buttonIsPressed(Button.AB)) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
