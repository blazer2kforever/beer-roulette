import './pages/index.css';
import { pageSelectors } from './components/utils.js';
import { Overlay } from './components/overlay.js';
import { Roulette } from './components/roulette.js';

let overlay;
let roulette;

function init() {
  console.log('Initialization...');
  setupOverlay();
  setupRoulette();
}

function setupOverlay() {
  overlay = new Overlay(pageSelectors.overlay);
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
