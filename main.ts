input.onButtonPressed(Button.A, function () {
    if (canshoot) {
        lazer = game.createSprite(shooter.get(LedSpriteProperty.X), shooter.get(LedSpriteProperty.Y))
        lazer.turn(Direction.Left, 90)
        canshoot = false
    }
})
function boom () {
    if (lazer.isTouching(bad_guy)) {
        game.addScore(1)
        lazer.delete()
        bad_guy.delete()
        bad_guy = game.createSprite(randint(0, 5), 0)
        canshoot = true
    } else if (lazer.get(LedSpriteProperty.Y) == 0) {
        lazer.delete()
        canshoot = true
    }
}
let lazer: game.LedSprite = null
let canshoot = false
let bad_guy: game.LedSprite = null
let shooter: game.LedSprite = null
basic.showString("shooter")
music.playMelody("E D G F B A C5 B ", 350)
shooter = game.createSprite(2, 5)
bad_guy = game.createSprite(randint(0, 5), 0)
canshoot = true
game.startCountdown(10000)
basic.forever(function () {
    shooter.move(1)
    shooter.ifOnEdgeBounce()
    if (lazer) {
        lazer.move(1)
        boom()
    }
    basic.pause(200)
})
