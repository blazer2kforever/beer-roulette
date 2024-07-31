import { pageSelectors, rouletteConfig } from './utils';

class Roulette {
  constructor() {
    this.wheelObject = document.querySelector(pageSelectors.wheel);
    this.sectors = [];
    this.loseSectorIndices = [];
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

    this.sectors = document.querySelectorAll(pageSelectors.wheelSector);
    console.log(`Generated ${this.sectors.length} sectors for the roulette`);
  }

  defineLoseSectors(quantity) {
    let newloseIndices = [];

    while (newloseIndices.length < quantity) {
      let loseSectorIndex = Math.floor(Math.random() * this.sectors.length);
      if (!newloseIndices.includes(loseSectorIndex)) {
        newloseIndices.push(loseSectorIndex);
        this.sectors[loseSectorIndex].classList.add('wheel__sector_lose');
        this.sectors[loseSectorIndex].querySelector(
          '.wheel__sector-text'
        ).textContent = rouletteConfig.loseSectorPlaceholder;
      }
    }

    this.loseSectorIndices = newloseIndices;
    console.log(
      `Losing sectors are defined: ${
        this.loseSectorIndices
      }\nChance of winning: ${
        (rouletteConfig.sectorQuantity - this.loseSectorIndices.length) /
        rouletteConfig.sectorQuantity
      }`
    );
  }
}

export { Roulette };
