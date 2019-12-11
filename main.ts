sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . f f f f . . . . . . 
. . . . f f f 2 2 f f f . . . . 
. . . f f f 2 2 2 2 f f f . . . 
. . f f f e e e e e e f f f . . 
. . f e e 2 2 2 2 2 2 e f f . . 
. f f e 2 f f f f f f 2 e f f . 
. f f f f f e e e e f f f f f . 
. . f e f b f 4 4 f b f e f . . 
. . f e 4 1 f d d f 1 4 e f f . 
. . e f e 4 d d d d 4 e f f d f 
. . e 4 d d e 2 2 2 2 f e f b f 
. . . e d d e 2 2 2 2 f 4 f b f 
. . . . e e f 5 5 4 4 f . f c f 
. . . . . f f f f f f f . f f . 
. . . . . . . . . f f f . . . . 
`, SpriteKind.Player)
mySprite.setPosition(80, 88)
controller.moveSprite(mySprite)
let message_dad = "\"okey\""
mySprite.say(message_dad)
let mySprite2 = sprites.create(img`
. . . . . . . . . . b 5 b . . . 
. . . . . . . . . b 5 b . . . . 
. . . . . . . . . b c . . . . . 
. . . . . . b b b b b b . . . . 
. . . . . b b 5 5 5 5 5 b . . . 
. . . . b b 5 d 1 f 5 5 d f . . 
. . . . b 5 5 1 f f 5 d 4 c . . 
. . . . b 5 5 d f b d d 4 4 . . 
b d d d b b d 5 5 5 4 4 4 4 4 b 
b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
b d c 5 5 5 5 d 5 5 5 5 5 b . . 
c d d c d 5 5 b 5 5 5 5 5 5 b . 
c b d d c c b 5 5 5 5 5 5 5 b . 
. c d d d d d d 5 5 5 5 5 d b . 
. . c b d d d d d 5 5 5 b b . . 
. . . c c c c c c c c b b . . . 
`, SpriteKind.Player)
mySprite2.setPosition(50, 88)
controller.moveSprite(mySprite2)
message_dad = "\"quack\""
mySprite2.say(message_dad)
let girl = sprites.create(img`
. . . . . . . f f . . . . . . . 
. . . . . f f 4 4 f f . . . . . 
. . . . f 5 4 5 5 4 5 f . . . . 
. . . f e 4 5 5 5 5 4 e f . . . 
. . f b 3 e 4 4 4 4 e 3 b f . . 
. f e 3 3 3 3 3 3 3 3 3 3 e f . 
. f 3 3 e b 3 e e 3 b e 3 3 f . 
. f b 3 f f e e e e f f 3 b f . 
f f b b f b f e e f b f b b f f 
f b b b e 1 f 4 4 f 1 e b b b f 
. f b b f 4 4 4 4 4 e e b b f . 
. . f e f b d d d e 4 4 4 f . . 
. . e 4 c d d d d e 4 4 e f . . 
. . e f b b d b d d e e f . . . 
. . . f f 1 1 d 1 d 1 f f . . . 
. . . . . f b b f f f . . . . . 
`, SpriteKind.Player)
girl.setPosition(110, 50)
controller.moveSprite(girl)
message_dad = "\"hey\""
girl.say(message_dad)
let boy = sprites.create(img`
. . . . f f f f . . . . . 
. . f f f f f f f f . . . 
. f f f f f f c f f f . . 
f f f f f f c c f f f c . 
f f f c f f f f f f f c . 
c c c f f f e e f f c c . 
f f f f f e e f f c c f . 
f f f b f e e f b f f f . 
. f 4 1 f 4 4 f 1 4 f . . 
. f e 4 4 4 4 4 4 e f . . 
. f f f e e e e f f f . . 
f e f b 7 7 7 7 b f e f . 
e 4 f 7 7 7 7 7 7 f 4 e . 
e e f 6 6 6 6 6 6 f e e . 
. . . f f f f f f . . . . 
. . . f f . . f f . . . . 
`, SpriteKind.Player)
boy.setPosition(138, 54)
controller.moveSprite(boy)
message_dad = "\"sup\""
boy.say(message_dad)
let ball = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . 5 5 f 5 5 f 5 5 . . . . 
. . . 5 5 5 f 5 5 f 5 5 . . . . 
. . . 5 5 5 f 5 5 f 5 5 5 . . . 
. . . f f f f f f f f f f . . . 
. . . 5 5 5 f 5 5 f 5 5 5 . . . 
. . . f f f f f f f f f f . . . 
. . . 5 5 5 f 5 5 f 5 5 5 . . . 
. . . 5 5 5 f 5 5 f 5 5 5 . . . 
. . . 5 5 5 f 5 5 f 5 5 . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
game.onUpdateInterval(500, function () {
    ball.x += controller.dx()
    ball.x += controller.dy()
})
