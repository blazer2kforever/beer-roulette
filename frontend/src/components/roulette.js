import { rouletteConfig } from './utils';

class RouletteController {
  constructor() {
    this.rouletteObject = document.querySelector(
      rouletteConfig.rouletteSelector
    );
    this.wheelObject = document.querySelector(rouletteConfig.wheelSelector);
    this.sectors = [];
    this.loseSectorIndices = [];
    this.animationPhase = 'idling';
  }

  createSectors() {
    const sectorTemplate = document.getElementById(
      rouletteConfig.sectorTemplateID
    ).content;

    for (let index = 0; index < rouletteConfig.sectorQuantity; index++) {
      const sectorClone = document.importNode(sectorTemplate, true);
      const sector = sectorClone.querySelector(rouletteConfig.sectorSelector);
      const rotationAngle = index * (360 / rouletteConfig.sectorQuantity);
      sector.style.transform = `rotate(${rotationAngle}deg)`;

      this.wheelObject.appendChild(sector);
    }

    this.sectors = document.querySelectorAll(rouletteConfig.sectorSelector);
    console.log(`Generated ${this.sectors.length} sectors for the roulette`);
  }

  defineLoseSectors(quantity) {
    let newloseIndices = [];

    while (newloseIndices.length < quantity) {
      let loseSectorIndex = Math.floor(Math.random() * this.sectors.length);
      if (!newloseIndices.includes(loseSectorIndex)) {
        newloseIndices.push(loseSectorIndex);
        this.sectors[loseSectorIndex].classList.add(
          rouletteConfig.loseSectorClass
        );
        this.sectors[loseSectorIndex].querySelector(
          rouletteConfig.sectorTextSelector
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

  clearSectors() {
    this.loseSectorIndices = [];
    this.sectors.forEach((sector) => {
      if (sector.classList.contains(rouletteConfig.loseSectorClass)) {
        sector.classList.remove(rouletteConfig.loseSectorClass);
        sector.querySelector(rouletteConfig.sectorTextSelector).textContent =
          rouletteConfig.winSectorPlaceholder;
      }
    });
  }

  normalizeAngle(originalAngle) {
    let normalizedAngle = originalAngle % 360;
    return normalizedAngle;
  }

  findSectorIndex(angle) {
    // Recode
    const sectorAngles = [
      { index: 0, from: 0, to: 17 },
      { index: 9, from: 18, to: 54 },
      { index: 8, from: 55, to: 90 },
      { index: 7, from: 91, to: 126 },
      { index: 6, from: 127, to: 162 },
      { index: 5, from: 163, to: 198 },
      { index: 4, from: 199, to: 234 },
      { index: 3, from: 235, to: 270 },
      { index: 2, from: 271, to: 306 },
      { index: 1, from: 307, to: 342 },
      { index: 0, from: 343, to: 360 },
    ];

    for (let i = 0; i < sectorAngles.length; i++) {
      if (angle >= sectorAngles[i].from && angle <= sectorAngles[i].to) {
        return sectorAngles[i].index;
      }
    }

    return null;
  }

  start() {
    this.animationPhase = 'placing';

    this.wheelObject.classList.remove(rouletteConfig.wheelIdleClass);
    this.rouletteObject.classList.add(rouletteConfig.roulettePlaceClass);

    this.rouletteObject.addEventListener(
      'transitionend',
      () => {
        this.animationPhase = 'spinning';
        this.spin();
      },
      { once: true }
    );
  }

  spin() {
    // Recode
    let spinAngle = 1080 + Math.ceil(Math.random() * 1080);
    let normalizedAngle = this.normalizeAngle(spinAngle);
    let sectorIndex = this.findSectorIndex(normalizedAngle);

    let result = this.loseSectorIndices.includes(sectorIndex) ? 'lose' : 'win';

    console.log(
      'Original angle: ' +
        spinAngle +
        '\n Normalized angle: ' +
        normalizedAngle +
        '\n Result sector: ' +
        sectorIndex +
        '\n Result: ' +
        result
    );
    // Recode: bezier should be stored in a constant
    this.wheelObject.style.transition =
      'transform 7s cubic-bezier(0.050, 0.000, 0.180, 1.000)';
    this.wheelObject.style.transform = 'rotate(' + spinAngle + 'deg)';
    this.sectors.forEach((sector) => {
      sector.classList.add(rouletteConfig.sectorBlurClass);
    });

    this.wheelObject.addEventListener(
      'transitionend',
      () => {
        this.animationPhase = 'stopped';
        this.sectors.forEach((sector) => {
          sector.classList.remove(rouletteConfig.sectorBlurClass);
        });

        this.sectors[sectorIndex].classList.add(rouletteConfig.sectorGlowClass);
      },
      { once: true }
    );
  }
}

export { RouletteController };
