let Degrees = 0
input.calibrateCompass()
basic.showIcon(IconNames.Heart)
basic.pause(3000)
basic.forever(function () {
    Degrees = input.compassHeading()
    if (Degrees < 22.5) {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    } else if (Degrees < 67.5) {
        basic.showLeds(`
            . # # # #
            . . . # #
            . . # . #
            . # . . #
            # . . . .
            `)
    } else if (Degrees < 112.5) {
        basic.showLeds(`
            # # # # #
            # . . . .
            # # # # .
            # . . . .
            # # # # #
            `)
    } else if (Degrees < 157.5) {
        basic.showLeds(`
            # . . . .
            . # . . #
            . . # . #
            . . . # #
            . # # # #
            `)
    } else if (Degrees < 202.5) {
        basic.showLeds(`
            . # # # #
            # . . . .
            . # # # .
            . . . . #
            # # # # .
            `)
    } else if (Degrees < 247.5) {
        basic.showLeds(`
            . . . . #
            # . . # .
            # . # . .
            # # . . .
            # # # # .
            `)
    } else if (Degrees < 292.5) {
        basic.showLeds(`
            # . . . #
            # . # . #
            # . # . #
            # . # . #
            . # . # .
            `)
    } else if (Degrees < 337.5) {
        basic.showLeds(`
            # # # # .
            # # . . .
            # . # . .
            # . . # .
            . . . . #
            `)
    } else {
        basic.showLeds(`
            # . . . #
            # # . . #
            # . # . #
            # . . # #
            # . . . #
            `)
    }
})
