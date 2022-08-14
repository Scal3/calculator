import { buttons } from "./selectors";
import { playSoundClick } from "./utils";


window.addEventListener('mouseup', (event: any) => {
  if (event.target.classList.contains('calculator__button')) {
    playSoundClick();
  }
});