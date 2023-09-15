const gu = document.querySelector(".item1");
const choki = document.querySelector(".item2");
const pa = document.querySelector(".item3");
const fire = document.querySelector(".item4");
const water = document.querySelector(".item5");
const myHand = document.querySelector("#myHand");
const cpuHand = document.querySelector("#cpuHand");
const resultText = document.querySelector(".resultText");

gu.addEventListener("click", () => {
    myHand.setAttribute("src", "./images/janken_gu.png");
    startJanken(0);
})

choki.addEventListener("click", () => {
    myHand.setAttribute("src", "./images/janken_choki.png");
    startJanken(1);
})

pa.addEventListener("click", () => {
    myHand.setAttribute("src", "./images/janken_pa.png");
    startJanken(2);
})

fire.addEventListener("click", () => {
    myHand.setAttribute("src", "./images/janken_fire.png");
    startJanken(3);
})

water.addEventListener("click", () => {
    myHand.setAttribute("src", "./images/janken_water.png");
    startJanken(4);
})

function startJanken(myHandNum) {
    const randomNum = Math.floor(Math.random() * 5);
    if(randomNum == 0) {
        cpuHand.setAttribute("src", "./images/janken_gu.png")
    } else if(randomNum == 1) {
        cpuHand.setAttribute("src", "./images/janken_choki.png")
    } else if(randomNum == 2) {
        cpuHand.setAttribute("src", "./images/janken_pa.png")
    } else if(randomNum == 3) {
        cpuHand.setAttribute("src", "./images/janken_fire.png")
    } else {
        cpuHand.setAttribute("src", "./images/janken_water.png")
    }

    if(myHandNum == randomNum) {
        resultText.innerText = "あいこ";
        resultText.style = "color: black;";
    } else if(myHandNum == 0 && randomNum == 1 || myHandNum == 0 && randomNum == 4) {
        resultText.innerText = "勝ち";
        resultText.style = "color: red;";
    } else if(myHandNum == 1 && randomNum == 2 || myHandNum == 1 && randomNum == 4) {
        resultText.innerText = "勝ち";
        resultText.style = "color: red;";
    } else if(myHandNum == 2 && randomNum == 0 || myHandNum == 2 && randomNum == 4) {
        resultText.innerText = "勝ち";
        resultText.style = "color: red;";
    } else if(myHandNum == 3 && randomNum == 0 || myHandNum == 3 && randomNum == 1 || myHandNum == 3 && randomNum == 2) {
        resultText.innerText = "勝ち";
        resultText.style = "color: red;";
    } else if(myHandNum == 4 && randomNum == 3) {
        resultText.innerText = "勝ち";
        resultText.style = "color: red;";
    } else {
        resultText.innerText = "負け";
        resultText.style = "color: blue;";
    }
}