import { modesConfig, dayStatus } from './utils';

class ModesController {
  constructor() {
    this.modes = document.querySelectorAll(modesConfig.modeSelector);
  }

  setActiveMode(roulette) {
    // Definitely needs to be recoded
    this.modes.forEach((mode) => {
      mode.addEventListener('click', () => {
        if (!mode.classList.contains(modesConfig.activeModeClass)) {
          this.modes.forEach((any) => {
            if (any.classList.contains(modesConfig.activeModeClass)) {
              any.classList.remove(modesConfig.activeModeClass);
            }
          });
          mode.classList.add(modesConfig.activeModeClass);
          const modeIndex = Array.from(this.modes).indexOf(mode);
          const modeText = document.querySelector(modesConfig.textSelector);
          modeText.textContent = dayStatus[modeIndex];
          roulette.clearSectors();
          switch (modeIndex) {
            case 0:
              roulette.defineLoseSectors(5);
              break;
            case 1:
              roulette.defineLoseSectors(3);
              break;
            case 2:
              roulette.defineLoseSectors(1);
              break;
            case 3:
              roulette.defineLoseSectors(0);
              break;
            default:
              roulette.defineLoseSectors(5);
          }
        }
      });
    });
  }

  disableModes() {
    this.modes.forEach((mode) => {
      mode.disabled = true;
    });
  }
}

export { ModesController };
