import { overlayConfig } from './utils';

class OverlayController {
  constructor() {
    this.object = document.querySelector(overlayConfig.selector);
  }

  hide(time) {
    if (!this.object || !time) return;
    this.object.style.animation = `fade-out ${time}s ease forwards`;
    this.object.addEventListener(
      'animationend',
      () => {
        this.object.style.visibility = 'hidden';
        console.log('Overlay hidden');
      },
      { once: true }
    );
  }

  show(time) {
    if (!this.object || !time) return;
    this.object.style.visibility = 'visible';
    this.object.style.animation = `fade-in ${time}s ease forwards`;
    console.log('Overlay displayed');
  }

  dim(time) {
    if (!this.object || !time) return;
    this.object.style.visibility = 'visible';
    this.object.style.animation = `fade-in-80percent ${time}s ease forwards`;
    console.log('Overlay dimmed');
  }

  getObject() {
    return this.object;
  }
}

export { OverlayController };
