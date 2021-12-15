let paddle = document.querySelector("div")
let board = document.querySelector("main")
let ball = document.querySelector("header")
let l = 0
    // let r = 0
document.addEventListener("keydown", (e) => {
    if (e.key == "ArrowRight") {
        // let l = paddle.getBoundingClientRect().left - paddle.getBoundingClientRect().x
        // (l + paddle.getBoundingClientRect().width - 10) < (board.getBoundingClientRect().right)
        if (l + 20 < board.getBoundingClientRect().width) {
            l = l + 10
            paddle.style.left = l + "px"
        }
    } else {
        // let l = paddle.getBoundingClientRect().left - paddle.getBoundingClientRect().x
        // (l + paddle.getBoundingClientRect().width - 10) > (board.getBoundingClientRect().left)
        if (l > 0) {
            l = l - 10
            paddle.style.left = l + "px"
        }
    }
})


var verticalFlag = false
var horizontalFlag = false
var bottom = 0
var left = 0
var speed = 1


function move() {
    if (verticalFlag) {
        bottom -= speed
        if (bottom == 0) {
            verticalFlag = false
        }
        ball.style.bottom = bottom + "px"
    } else {
        bottom += speed
        if (bottom == 360) {
            if (
                ball.getBoundingClientRect().x + 15 > paddle.getBoundingClientRect().x &&
                ball.getBoundingClientRect().x + 15 < paddle.getBoundingClientRect().x + 30) {
                verticalFlag = true
            } else {
                alert("game over")
                verticalFlag = true
            }
        }
        ball.style.bottom = bottom + "px"
    }

    if (horizontalFlag) {
        left -= speed
        if (left == 0) {
            horizontalFlag = false
        }
        ball.style.left = left + "px"
    } else {
        left += speed
        if (left == 570) {
            horizontalFlag = true
        }
        ball.style.left = left + "px"
    }
    requestAnimationFrame(move)
}

requestAnimationFrame(move)