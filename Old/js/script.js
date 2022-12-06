const app = document.querySelector('#app');
const disc = document.querySelector('color-disc');
const output = document.querySelector('#color');
const format = document.querySelector('#format');

function updateColor() {
  output.innerText = disc.getAttribute('color');
  app.style.backgroundColor = disc.getAttribute('color');
}

function observeColor() {
  updateColor();
  const config = { attributes: true };
  const callback = function (list, observer) {
    list.forEach(mutation => {
      if (mutation.attributeName)
      updateColor();
    });
  };
  const observer = new MutationObserver(callback);
  observer.observe(disc, config);
}

function setColorFormat() {
  format.addEventListener('change', e => {
    disc.setAttribute('format', e.target.value);
  });
}

observeColor();
setColorFormat();