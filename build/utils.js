// Create sounds off
const playSoundClick = () => {
    const audio = new Audio('../assets/click.wav');
    audio.volume = 0.1;
    audio.play();
};
const setInitialScreenValue = (screen, calcValue) => {
    if (!screen) {
        throw new Error('kek');
    }
    screen.textContent = calcValue;
};
export { playSoundClick, setInitialScreenValue };
