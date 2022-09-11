basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showIcon(IconNames.Diamond)
    basic.pause(2000)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
})
