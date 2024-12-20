const startScreen = document.querySelector('.start-screen');
const gameScreen = document.querySelector('.game-screen');

function initGameObject(){
    return{
        startScreen,
        gameScreen,
        createWizard(initialState){
            let wizardElement = document.createElement('div');

            wizardElement.classList.add('wizard');
            wizardElement.style.height = initialState.height + 'px';
            wizardElement.style.width = initialState.width + 'px';
            wizardElement.style.left = initialState.startX + 'px';
            wizardElement.style.top = initialState.startY + 'px';

            this.wizardElement = wizardElement;
            gameScreen.appendChild(wizardElement);

            return wizardElement;
        }
    };
}