const popupConfig = {
  errorTemplateSelector: '#popup-error-template',
  selector: '.popup',
  textSelector: '.popup__text',
  showStateClass: 'popup_state_show',
  hideStateClass: 'popup_state_hide',
};

const overlayConfig = {
  selector: '.overlay',
};

const rouletteConfig = {
  sectorQuantity: 10,
  winSectorPlaceholder: 'Drink',
  loseSectorPlaceholder: "Don't",
  wheelSelector: '.wheel',
  sectorTemplateID: 'sector-template',
  sectorSelector: '.wheel__sector',
  loseSectorSelector: '.wheel__sector_lose',
  sectorTextSelector: '.wheel__sector-text',
};

export { popupConfig, overlayConfig, rouletteConfig };
