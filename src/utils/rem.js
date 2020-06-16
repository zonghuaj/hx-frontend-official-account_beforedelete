const baseSize = 32;

window.onresize = function () {
  setRem();
};

window.onload = function () {
  setRem();
};

function setRem () {
  let clientWidth = document.documentElement.clientWidth;
  let scale = clientWidth / 750;
  document.documentElement.style.fontSize = (baseSize * Math.min(scale, 5)) + 'px';
}

const rem = {
  setRem: setRem
};

export default rem;
