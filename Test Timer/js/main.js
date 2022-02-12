var timer = document.getElementById("timer")
var lastRender = 0

console.log(timer.innerHTML)

function update(progress) {
    // Update the state of the world for the elapsed time since last render
}

function draw() {
    // Draw the state of the world
}

function loop(timestamp) {
    var progress = timestamp - lastRender

    update(progress)
    draw()

    lastRender = timestamp
    window.requestAnimationFrame(loop)
}
window.requestAnimationFrame(loop)

function start() {
    console.log("start")
}

function reset() {
    console.log("reset")
}