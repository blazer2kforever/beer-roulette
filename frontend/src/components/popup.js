import { popupConfig } from './utils';

class PopupController {
  constructor() {
    this.errorTemplate = document.querySelector(
      popupConfig.errorTemplateSelector
    ).content;
    console.log(this.errorTemplate);
  }
  showError(message) {
    const popupClone = document.importNode(this.errorTemplate, true);
    const popup = popupClone.querySelector(popupConfig.selector);
    popup.querySelector(popupConfig.textSelector).textContent = message;

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add(popupConfig.showStateClass);
      console.log('Popup displayed');
    }, 50); // Slight delay so the browser shows anim correctly

    setTimeout(() => {
      popup.classList.add(popupConfig.hideStateClass);

      popup.addEventListener(
        'transitionend',
        () => {
          popup.remove();
          console.log('Popup hidden');
        },
        { once: true }
      );
    }, 5000);
  }
}

export { PopupController };
