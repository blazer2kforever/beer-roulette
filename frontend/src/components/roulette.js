import { pageSelectors, rouletteConfig } from './utils';

class Roulette {
  constructor() {
    this.wheelObject = document.querySelector(pageSelectors.wheel);
  }

  createSectors() {
    const sectorTemplate = document.querySelector(
      pageSelectors.wheelSectorTemplate
    ).content;

    for (let index = 0; index < rouletteConfig.sectorQuantity; index++) {
      const sectorClone = document.importNode(sectorTemplate, true);
      const sector = sectorClone.querySelector(pageSelectors.wheelSector);
      const rotationAngle = index * (360 / rouletteConfig.sectorQuantity);
      sector.style.transform = `rotate(${rotationAngle}deg)`;

      this.wheelObject.appendChild(sector);
    }
  }
}

export { Roulette };
