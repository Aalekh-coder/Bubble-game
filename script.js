let bubbleTouch;
let timer = 61;
let randomNum;
let bubble = document.querySelector(".pbtm");
let score = 0;



bubble.addEventListener("click", (e) => {
    console.log(Number(e.target.textContent));
    bubbleTouch = Number(e.target.textContent);
    if (bubbleTouch === randomNum) {
      console.log("right touch");
      score += 10;
        document.querySelector("#score").textContent = score;
        randomHit();
        GenBubble();
        // highestScore();
       
  }
  });

function GenBubble() {
  let clutter = "";
  for (let i = 1; i < 172; i++) {
    let randomNum = Math.floor(Math.random() * 10);
    clutter += ` <div class="bubble">${randomNum}</div>`;
    document.querySelector(".pbtm").innerHTML = clutter;
  }
}

function randomHit() {
  randomNum = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = randomNum;
}

// this feature will update later soon 
// let highest = 0;
// function highestScore() {
    
//     highest = score;
//     document.querySelector("#high").textContent = highest;
// }

function runTimeOut() {
  let timeOut = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timeOut);
      document.querySelector(".pbtm").innerHTML = "<h1>Game Over</h1>";
    }
  }, 1000);
}



randomHit();
runTimeOut();
GenBubble();
