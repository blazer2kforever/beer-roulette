import './pages/index.css';
import { Overlay } from './components/overlay.js';
import { Roulette } from './components/roulette.js';
import { PopupController } from './components/popup.js';

let popupController;
let overlay;
let roulette;

const testButton = document.getElementById('test');

function init() {
  console.log('Initialization...');
  setupPopups();
  setupOverlay();
  setupRoulette();
  testButton.addEventListener('click', () => {
    popupController.showError(
      'Something went wrong Something went wrong Something went wrong'
    );
  });
}

function setupPopups() {
  popupController = new PopupController();
}

function setupOverlay() {
  overlay = new Overlay();
  overlay.hide(1.5);
}

function setupRoulette() {
  roulette = new Roulette();
  roulette.createSectors();
  roulette.defineLoseSectors(3);
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    init();
  },
  { once: true }
);
