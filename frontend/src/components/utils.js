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
  rouletteSelector: '.roulette',
  winSectorPlaceholder: 'Drink',
  loseSectorPlaceholder: "Don't",
  wheelSelector: '.wheel',
  wheelIdleClass: 'wheel_idle',
  sectorTemplateID: 'sector-template',
  sectorSelector: '.wheel__sector',
  loseSectorClass: 'wheel__sector_lose',
  sectorTextSelector: '.wheel__sector-text',
  sectorBlurClass: 'wheel__sector_blurred',
  sectorGlowClass: 'wheel__sector_glow',
  roulettePlaceClass: 'roulette_place',
};

const modesConfig = {
  modeSelector: '.select__mode',
  activeModeClass: 'select__mode_active',
  textSelector: '.select__text',
};

const dayStatus = [
  "The day wasn't too hard.",
  "I'm a bit tired, but it's bearable.",
  'I definitely need to rest.',
  'A crate of beer. Right now.',
];

export { popupConfig, overlayConfig, rouletteConfig, modesConfig, dayStatus };
