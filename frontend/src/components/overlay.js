class Overlay {
  constructor(selector) {
    this.object = document.querySelector(selector);
  }

  hide(time) {
    if (!this.object || !time) return;
    this.object.style.animation = `fade-out ${time}s ease forwards`;
    this.object.addEventListener(
      'animationend',
      () => {
        this.object.style.visibility = 'hidden';
      },
      { once: true }
    );
  }

  show(time) {
    if (!this.object || !time) return;
    this.object.style.visibility = 'visible';
    this.object.style.animation = `fade-in ${time}s ease forwards`;
  }

  dim(time) {
    if (!this.object || !time) return;
    this.object.style.visibility = 'visible';
    this.object.style.animation = `fade-in-80percent ${time}s ease forwards`;
  }

  getObject() {
    return this.object;
  }
}

export { Overlay };
