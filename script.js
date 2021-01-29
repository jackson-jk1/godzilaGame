const godzilla  = document.querySelector('.godzilla');
const backgorund  = document.querySelector('.background');
let isJump = false;
let position = 0;



function KeyhandleUp(event){
    if (event.keyCode == 32){ 
        if(!isJump){ 
            jump();
        }
         

    }

}

function jump(){
    isJump = true;
    let = upInterval = setInterval(() => {

        if(position >= 180){ 
            clearInterval(upInterval);
            
            let downInterval = setInterval(() =>{
                if(position <=0) {
                   clearInterval(downInterval); 
                   isJump = false;
                }else{ 
                position -= 20;
             godzilla.style.bottom = position + 'px';
                }
            },20);
        }else{ 
        position += 20;

        godzilla.style.bottom = position + 'px';
}
    },20);
}

function createTank(){
    const tank = document.createElement('div');

    let tankPosition = 1100;
    let randomTime = Math.random() * 6000;
    console.log(randomTime);
    tank.classList.add('tank');
    tank.style.left = 1000 + 'px';
    backgorund.appendChild(tank);

    let leaftInterval = setInterval(()=>{
        if(tankPosition < -60){
            clearInterval(leaftInterval);
            backgorund.removeChild(tank);
        }else if(tankPosition > 0 && tankPosition <80 && position <80){ 
            clearInterval(leaftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo</h1>'
        }else{ 
             tankPosition -= 8;
             tank.style.left = tankPosition + 'px';
            }
    }, 20);
   
  setTimeout(createTank,randomTime);
}
createTank();
document.addEventListener('keyup',KeyhandleUp);