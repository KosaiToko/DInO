const chicken = document.getElementById("chicken");
const cart = document.getElementById("cart");
let score = 0;
document.addEventListener("keyup", function(event) {
    jump();
});

function jump () {
    if (chicken.classList != "jump") {
      chicken.classList.add("jump");
      
    }
    setTimeout( function() {
        chicken.classList.remove("jump");
    }, 300)
}

setInterval(() => score++, 900)

let isAlive = setInterval ( function () {
    let chickenTop = parseInt(window.getComputedStyle(chicken).getPropertyValue("top"));
    let cartLeft = parseInt(window.getComputedStyle(cart).getPropertyValue("left"));

    if (cartLeft < 50 && cartLeft > 0 && chickenTop >= 140) {
      document.getElementById("chicken").style.backgroundImage = 'url("/img/chicken2.png")';
      alert("Конец игры! Счёт: " + score);
      window.location.reload();
    }
}, 10)