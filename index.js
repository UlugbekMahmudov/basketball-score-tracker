const bigScoreOne = document.getElementById("big-score-1")
const bigScoreTwo = document.getElementById("big-score-2")
const addScoreOne = document.getElementById("add-score-1")
const addScoreTwo = document.getElementById("add-score-2")
const addScoreThree = document.getElementById("add-score-3")
const addScoreFour = document.getElementById("add-score-4")
const addScoreFive = document.getElementById("add-score-5")
const addScoreSix = document.getElementById("add-score-6")
const resetBtn = document.getElementById("reset")
let count1 = 0
let count2 = 0

function changeColors() {
    if (count1 > count2) {
        bigScoreTwo.classList.remove("green")
        bigScoreOne.classList.add("green")
    } else if (count2 > count1) {
        bigScoreOne.classList.remove("green")
        bigScoreTwo.classList.add("green")
    } else {
        bigScoreOne.classList.remove("green")
        bigScoreTwo.classList.remove("green")
    }
}

resetBtn.addEventListener("click", function() {
    count1 = 0
    count2 = 0
    bigScoreOne.textContent = count1
    bigScoreTwo.textContent = count2
    changeColors()
})

addScoreOne.addEventListener("click", function() {
    count1 += 1
    bigScoreOne.textContent = count1; 
    changeColors()   
})

addScoreTwo.addEventListener("click", function() {
    count1 += 2
    bigScoreOne.textContent = count1;
    changeColors()   
})

addScoreThree.addEventListener("click", function() {
    count1 += 3
    bigScoreOne.textContent = count1;
    changeColors()   
})

addScoreFour.addEventListener("click", function() {
    count2 += 1
    bigScoreTwo.textContent = count2
    changeColors()   
})

addScoreFive.addEventListener("click", function() {
    count2 += 2
    bigScoreTwo.textContent = count2
    changeColors()   
})

addScoreSix.addEventListener("click", function() {
    count2 += 3
    bigScoreTwo.textContent = count2
    changeColors()   
})
