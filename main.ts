let directie = 0
basic.forever(function () {
    directie = input.compassHeading()
    if (directie < 45) {
        basic.showString("N")
    } else if (directie < 135) {
        basic.showString("E")
    } else if (directie < 225) {
        basic.showString("S")
    } else if (directie < 315) {
        basic.showString("V")
    } else {
        basic.showString("N")
    }
})
