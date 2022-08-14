import { playSoundClick } from "./utils";
window.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('calculator__button')) {
        playSoundClick();
    }
});
