let REZULTAT = ""
let directie = 0
let tinta = ""
let pc_cardinale = [
"N",
"E",
"S",
"V"
]
basic.forever(function () {
    tinta = pc_cardinale._pickRandom()
    basic.showString("" + (tinta))
    basic.pause(5000)
    directie = input.compassHeading()
    if (directie < 45) {
        REZULTAT = "N"
    } else if (directie < 135) {
        REZULTAT = "E"
    } else if (directie < 225) {
        REZULTAT = "S"
    } else if (directie < 315) {
        REZULTAT = "V"
    } else {
        REZULTAT = "N"
    }
    if (REZULTAT == tinta) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
