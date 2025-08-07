const searchParams = new URLSearchParams(location.search);
const id = searchParams.get('id');
const screenGame = document.getElementById('GameFrameScreen');

let tamanhoDeScreen = false;

function fullScreen(){
    screenGame.style = "left: 0vh; top: 0vh; width: 100%; height: 100%; position: fixed; border-radius: 0px;";
    const botaoRestart = document.createElement('input');
    botaoRestart.style = `    width: 8vh;
    height: 8vh;
    position: fixed;
    background-color: rgb(0, 1, 49);
    border-radius: 10px;
    border: 1px solid white;`
    document.getElementById('cotainer').appendChild(botaoRestart);
    botaoRestart.type = 'image';
    botaoRestart.addEventListener('click', function(event){
        tamanhoDeScreen = false;
        screenGame.style = `        position: absolute;
    width: 61%;
    height: 65%;
    left: 15vh;
    border-radius: 10px;
    background-color: rgb(0, 1, 41);`

        botaoRestart.remove();
    });
    botaoRestart.src = 'imagepage/localIcons/close_fullscreen_103dp_E3E3E3_FILL0_wght400_GRAD0_opsz48.png'
}

function unfullScreen(){
    screenGame.style = `        position: absolute;
    width: 61%;
    height: 65%;
    left: 15vh;
    border-radius: 10px;
    background-color: rgb(0, 1, 41);`    
}

//atalhos e teclas
document.addEventListener('keydown', function(event){
    if(event.key === 'f' && tamanhoDeScreen == false){
        fullScreen();
        tamanhoDeScreen = true;
    }
});

//verificar o id do jogo e colocar o jogo no fullscreen

if(id == null){
    location.href='index.html';
}else{
    if(id == '2ax785'){screenGame.src = 'https://smashkarts.io/';};
    if(id == '3op093'){screenGame.src = 'https://krunker.io';};
    if(id == '72Xi23'){screenGame.src = 'https://ev.io';};
    if(id == '7Iox23'){screenGame.src = 'https://diep.io';};
    if(id == '89nJ23'){screenGame.src = 'https://worms.zone/game/web/';};
    if(id == '27ixo20'){screenGame.src = 'https://kirka.io/';};
    if(id == '62ki309'){screenGame.src = 'https://nightpoint.io/';};
    if(id == '789is2'){screenGame.src = 'https://r74n.com/cook/';};
    if(id == '85ji02'){screenGame.src = 'https://sandboxels.r74n.com/';};
    if(id == '10kj45'){screenGame.src = 'https://classic.minecraft.net/';};
    if(id == '28lid3'){screenGame.src = 'https://2048game.com/pt/';};
    if(id == '20930lo'){screenGame.src = 'https://sllides.com/';};
}if(id ===''){location.href='index.html'}