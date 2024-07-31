import './pages/index.css';
import { OverlayController } from './components/overlay.js';
import { PopupController } from './components/popup.js';
import { RouletteController } from './components/roulette.js';
import { ModesController } from './components/modes.js';

let popupController;
let overlayController;
let rouletteController;
let modesController;

const testButton = document.getElementById('test');

function init() {
  console.log('Initialization...');
  setupPopups();
  setupOverlay();
  setupRoulette();
  testButton.addEventListener('click', () => {
    // popupController.showError(
    //   'Something went wrong Something went wrong Something went wrong'
    // );
    testButton.disabled = true;
    modesController.disableModes();
    rouletteController.start();
  });
  setupModes();
}

function setupPopups() {
  popupController = new PopupController();
}

function setupOverlay() {
  overlayController = new OverlayController();
  overlayController.hide(1.5);
}

function setupRoulette() {
  rouletteController = new RouletteController();
  rouletteController.createSectors();
  rouletteController.defineLoseSectors(5);
}

function setupModes() {
  modesController = new ModesController();
  modesController.setActiveMode(rouletteController);
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    init();
  },
  { once: true }
);
