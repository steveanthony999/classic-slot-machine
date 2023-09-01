const slotButton = document.getElementById('slot-button');

document.querySelector('body').addEventListener('click', () => {
  slotButton.style.bottom = '346px';

  setTimeout(() => {
    slotButton.style.bottom = '352px';
  }, 1000);
});
