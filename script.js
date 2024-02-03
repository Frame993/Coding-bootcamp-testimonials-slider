let cards = document.querySelectorAll("section");

let buttons = document.querySelector(".buttons");

let next = document.querySelectorAll(".next");
let prev = document.querySelectorAll(".prev");

let currentIndex = 0;

///////////////////////////////////////////////
cards[currentIndex].classList.add("active");

// next.addEventListener("click", nextCard);
// prev.addEventListener("click", prevCard);

console.log(next);
console.log(prev);

function nextCard() {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex + 1) % cards.length;
    cards[currentIndex].classList.add("active");
}

function prevCard() {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    cards[currentIndex].classList.add("active");
}

next.forEach(element => {
    element.addEventListener("click", nextCard);
});

prev.forEach(element => {
    element.addEventListener("click", prevCard);
})