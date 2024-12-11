function start(state, game){
    window.requestAnimationFrame(gameLoop.bind(null, state, game));
    game.createWizard(state.wizard);
}

function gameLoop(state, game){

    window.requestAnimationFrame(gameLoop.bind(null, state, game));
}