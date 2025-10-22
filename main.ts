input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.removeLife(1)
    }
})
input.onButtonPressed(Button.B, function () {
    player.move(1)
    player.ifOnEdgeBounce()
})
let player: game.LedSprite = null
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
player = game.createSprite(2, 4)
game.setLife(3)
game.setScore(0)
basic.forever(function () {
    sprite.move(1)
    basic.pause(80)
    sprite.ifOnEdgeBounce()
})
basic.forever(function () {
    let life = ""
    if (life == "0") {
        game.gameOver()
    }
})
