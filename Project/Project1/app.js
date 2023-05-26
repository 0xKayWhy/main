
const mainPage = document.querySelector(".mainPage");

const landingPage = document.querySelector(".landingPage");

const click = document.querySelector(".click");

const choice = document.querySelector(".choice");

const chaos = document.querySelector(".chaos");

const chill = document.querySelector(".chill");

const buttonA = document.querySelector(".buttonA");

const allBtn = document.querySelectorAll(".allBtn");

const buttonB = document.querySelector(".buttonB");

allBtn.forEach((btn) => {
    btn.addEventListener("mouseenter", () => {
      buttonB.play();
    });
  
    btn.addEventListener('mouseleave', () => {
      buttonB.pause();
      buttonB.currentTime = 0;
    });
  });

document.addEventListener("keydown",()=> {
    click.style.opacity = "0";
    click.style.transition = "opacity 1s";
    setTimeout(() => {
        click.style.display = "none";
        chaos.style.display = "block";
        chill.style.display = "block";
      }, 1000);
      

},{once:true});

document.addEventListener("click",()=> {
    click.style.opacity = "0";
    click.style.transition = "opacity 1s";
    setTimeout(() => {
        click.style.display = "none";
        choice.style.display = "block";

        chaos.style.display = "block";
        chill.style.display = "block";
      }, 1000);
      

},{once:true});


  // Attach click event listener to trigger the page transition
  document.addEventListener("click", (event) => {
    if (event.target == chaos || event.target == chill) {
        buttonA.play();
        const fadeOut = document.querySelector(".fade-out");
        fadeOut.classList.add("active");
        setTimeout(() => {
            window.location.href = "./index.html";
        }, 500);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeIn = document.querySelector(".fade-in");
    setTimeout(function() {
        fadeIn.classList.add("active1");
      }, 100);
  });


class CarGame {

    constructor () {
        this.movingCar = document.querySelector(".car");
        this.carPost = 0;
        this.parent = document.querySelector(".parent");
        this.randomObject = document.createElement('img');
        this.randomCars = document.querySelector(".randomCars");
        this.score = 0;
        this.scoreBoard = document.querySelector("#timer");
        this.container = document.querySelector(".container");
        this.winBox = document.querySelector(".winBox");
        this.loseBox = document.querySelector(".loseBox");
        this.switcher = true;
        this.tryAgain = document.querySelectorAll(".tryAgain");
        this.mainMenu = document.querySelectorAll(".mainMenu");
        this.guideTag = document.querySelector(".guideTag");
        this.blurr = document.querySelector(".blurr");
        this.countDown = document.querySelector(".countDown");
        this.pictures = ["car0.png","car1.png","car2.png","car3.png","car4.png","car5.png"]
        this.won = document.querySelector(".won");
        this.gameOver = document.querySelector(".gameOver");
        this.levelUp = document.querySelector(".levelUp");
        this.stage = document.querySelector(".stage");
        this.carGoA = document.querySelector(".carGoA");
        this.carStartA = document.querySelector(".carStartA");
        this.crashA = document.querySelector(".crashA");
        this.driftA = document.querySelector(".driftA");
        this.hornA = document.querySelector(".hornA");
        this.levelA = document.querySelector(".levelA");
        this.policeA = document.querySelector(".policeA");
        this.wonA = document.querySelector(".wonA");
        this.loseA = document.querySelector(".loseA");
        this.countDownA = document.querySelector(".countDownA");
        this.startGame = document.querySelector(".startGame")


        }

        randomPic () {
            let randomNum = Math.floor(Math.random() * this.pictures.length);
            
            return randomNum;      
        }


        moveCar () {
        document.addEventListener('keydown', (event) => {
            if(!this.switcher) {
                return;
            }
            if(this.carPost >= -400 && this.carPost <= 400){
                if(this.carPost === -400 && event.key === "ArrowLeft") {
                    this.switcher = false;
                    this.movingCar.classList.add("crash")
                    this.loseBox.style.visibility = "visible";
                    this.gameOver.style.visibility = "visible";
                    this.loseBox.classList.add("jumpingEff");
                    this.parent.removeChild(this.randomObject);
                    this.crashA.play();
                    this.driftA.play();
                    this.loseA.play();


                } else if (this.carPost === 400 && event.key === "ArrowRight") {
                    this.switcher = false;
                    this.movingCar.classList.add("crash")
                    this.loseBox.style.visibility = "visible";
                    this.gameOver.style.visibility = "visible";
                    this.loseBox.classList.add("jumpingEff");
                    this.parent.removeChild(this.randomObject);
                    this.crashA.play();
                    this.driftA.play();
                    this.loseA.play();
                } else if (event.key === "ArrowLeft") {
                    this.driftA.play();
                    setTimeout(()=>{
                        this.driftA.pause();
                        this.driftA.currentTime = 0;
                    },700)
                    this.carPost -= 100;
                    this.movingCar.style.transform = "rotate(-35deg)";
                    this.movingCar.style.transition = "transform rotate ease-in-out 2s";
                    setTimeout(() => {this.movingCar.style.transform = "rotate(0deg)";},500);
                } else if (event.key === "ArrowRight") {
                    this.driftA.play();
                    setTimeout(()=>{
                        this.driftA.pause();
                        this.driftA.currentTime = 0;
                    },700)
                    this.carPost += 100;
                    this.movingCar.style.transform = "rotate(35deg)";
                    setTimeout(() => {this.movingCar.style.transform = "rotate(0deg)";},500);
                }
            }
        
            this.movingCar.style.marginLeft = this.carPost + "px";
        
            })
        }

        createObj () {
            if(!this.switcher) {
                this.parent.removeChild(this.randomObject);;
            }
            this.hornA.play()
            this.randomPic();
            this.parent.appendChild(this.randomObject);
            this.randomObject.classList.add("randomCars");
            this.randomObject.src = "../Images/" + this.pictures[this.randomPic()];
            console.log(this.randomPic());
            this.randomObject.style.marginLeft  = Math.floor(Math.random() * 800)-400 + "px";
            if(this.score < 100) {
                if(!this.switcher) {
                    this.parent.removeChild(this.randomObject);
                }
                setTimeout(() => { 
                    this.randomObject.style.transform = "translateY(0%)";
                    this.randomObject.style.marginLeft  = Math.floor(Math.random() * 800)-400 + "px";
                    this.createObj();
            }, 5000);
            } else if (this.score < 200) {
                if(!this.switcher) {
                    this.parent.removeChild(this.randomObject);;
                }
                this.randomObject.style.animation = `movingFrame 3.5s linear infinite`;
                setTimeout(() => { 
                    this.randomObject.style.transform = "translateY(0%)";
                    this.randomObject.style.marginLeft  = Math.floor(Math.random() * 800)-400 + "px";
                    this.createObj();
                }, 3500);
            } else if (this.score < 300) {
                if(!this.switcher) {
                    this.parent.removeChild(this.randomObject);;
                }
                this.randomObject.style.animation = `movingFrame 2.5s linear infinite`;
                setTimeout(() => { 
                    this.randomObject.style.transform = "translateY(0%)";
                    this.randomObject.style.marginLeft  = Math.floor(Math.random() * 800)-400 + "px";
                    this.createObj();
                }, 2500);
            } else if (this.score < 400) {
                if(!this.switcher) {
                    this.parent.removeChild(this.randomObject);
                }
                this.randomObject.style.animation = `movingFrame 2s linear infinite`;
                setTimeout(() => { 
                    this.randomObject.style.transform = "translateY(0%)";
                    this.randomObject.style.marginLeft  = Math.floor(Math.random() * 800)-400 + "px";
                    this.createObj();
                }, 2000);
            } else if (this.score < 500) {
                if(!this.switcher) {
                    this.parent.removeChild(this.randomObject);
                }
                this.randomObject.style.animation = `movingFrame 1.75s linear infinite`;
                setTimeout(() => { 
                    this.randomObject.style.transform = "translateY(0%)";
                    this.randomObject.style.marginLeft  = Math.floor(Math.random() * 800)-400 + "px";
                    this.createObj();
                }, 1750);

            } else if (this.score >= 500) {

                this.parent.removeChild(this.randomObject);
                
            }
        }
    


        crash () {
            if(!this.switcher) {
                return;
            }
            if(this.randomObject) {
            const rect1 = this.randomObject.getBoundingClientRect();
            const rect2 = this.movingCar.getBoundingClientRect();
        
            const car1Top = rect1.top;
            const car1Left = rect1.left;
            const car1Right = rect1.right;
            const car1Bottom = rect1.bottom;
        
            const car2Top = rect2.top;
            const car2Left = rect2.left;
            const car2Right = rect2.right;
            const car2Bottom = rect2.bottom;
        
            if (
            car1Bottom >= car2Top &&
            car1Top <= car2Bottom &&
            car1Right >= car2Left &&
            car1Left <= car2Right
            ) {
            // Collision occurred
            this.driftA.play();
            this.crashA.play();
            this.loseA.play();
            this.switcher = false;
            this.movingCar.classList.add("crash")
            this.loseBox.style.visibility = "visible";
            this.gameOver.style.visibility = "visible";
            this.loseBox.classList.add("jumpingEff");
            this.parent.removeChild(this.randomObject);
            // alert("You've crash your car!");
            }
        }
    }

        animateObjects = () => {
            // Update object positions and animations
        
            // Check collision
            this.crash();
        
            // Continue animation
            requestAnimationFrame(this.animateObjects);
        }
        

        
        printScore() {
            setInterval(()=> {
                if(!this.switcher) {
                    return;
                }
                this.score+= 10;
                this.scoreBoard.innerText = "Your score: " + this.score + " pts";
            },1000)
            
        }

        winning() {
            if (this.score >= 500) {
                this.wonA.play();
                this.switcher = false;
                this.winBox.style.visibility = "visible";
                this.won.style.visibility = "visible";
                this.winBox.classList.add("jumpingEff");
            }
        }

        stageLevel () {
            if(!this.switcher) {
                return;
            }
            if (this.score === 500) {
                this.levelA.play();
                this.stage.innerText = "Stage : 2";
                this.levelUp.style.visibility = "visible";
                setTimeout(() => {
                    this.levelUp.style.visibility = "hidden"
                },1000);
            } else if (this.score === 200) {
                this.levelA.play();
                this.stage.innerText = "Stage : 3";
                this.levelUp.style.visibility = "visible";
                setTimeout(() => {
                    this.levelUp.style.visibility = "hidden"
                },1000);
            } else if (this.score === 300) {
                this.levelA.play();
                this.stage.innerText = "Stage : 4";
                this.levelUp.style.visibility = "visible";
                setTimeout(() => {
                    this.levelUp.style.visibility = "hidden"
                },1000);
            } else if (this.score === 400) {
                this.levelA.play();
                this.stage.innerText = "Stage : 5";
                this.levelUp.style.visibility = "visible";
                setTimeout(() => {
                    this.levelUp.style.visibility = "hidden"
                },1000);

            }


        }
}

    const start = new CarGame();

    start.carStartA.play();
    start.carStartA.volume -= 0.5;
    start.startGame.volume -= 0.7;
    start.carGoA.volume -= 0.5;

    document.addEventListener("keydown",() => {
    setTimeout (() =>{start.countDownA.play();},700);  
    start.blurr.remove();
    start.guideTag.remove();
    start.countDown.style.visibility = "visible";
    setTimeout(()=>{start.countDown.remove()},5000);


    setTimeout(()=> {
    //start moving car
    start.moveCar();

    //start creating random cars

    setTimeout(() => {
        start.createObj()},1500);
    

    //start printing score
    start.printScore();


    start.animateObjects();
    
    setInterval(() => {
        start.winning();
        start.stageLevel();
    
    },500);

    document.addEventListener("click", (event) => {

        start.tryAgain.forEach((element) => {
            if (event.target == element) {
                buttonA.play();
                setTimeout(() => {
                    location.reload();
                }, 500);
            }
        });
        start.mainMenu.forEach((element)=> {

            if (event.target == element) {
                            buttonA.play();
                setTimeout(() => {
                    window.location.href = "./landing.html";
                }, 500);
            }

        });

    });


    // add counting screen and mode eg chilling, drifting mode etc

    //user guide how to play

    //landing page with click anything to start and mode selection
},5000);
},{once : true});

