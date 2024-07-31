import './pages/index.css';
import { pageSelectors } from './components/utils.js';
import { Overlay } from './components/overlay.js';

let overlay;

function init() {
  setupOverlay();
}

function setupOverlay() {
  overlay = new Overlay(pageSelectors.overlay);
  overlay.hide(1.5);
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    init();
  },
  { once: true }
);
