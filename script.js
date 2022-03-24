document.querySelector('form').addEventListener('submit', (event) => {
  event.preventDefault();
  let drink = document.getElementById('drink').value;

  if (drink.toLowerCase() === 'Old Monk'.toLowerCase()) {
    document.getElementById('hide').style.display = 'none';
    document.getElementById('result').innerText =
      "It's not about, kungfoing, it's about total optical sum of fuktiper soil.";
    document.getElementById('show').style.display = 'flex';
  } else if (drink.toLowerCase() === 'Magic Moments'.toLowerCase()) {
    document.getElementById('hide').style.display = 'none';
    document.getElementById('result').innerText = 'Jo g**nd dega wo dost hai.';
    document.getElementById('show').style.display = 'flex';
  } else {
    document.getElementById('result').innerText =
      "Only old monk and magic moments. (Kedi's favourite)";
    document.getElementById('hide').style.display = 'none';
    document.getElementById('show').style.display = 'flex';
  }

  document.getElementById('drink').value = '';

  setTimeout(() => {
    document.getElementById('result').innerText =
      "Only old monk and magic moments. (Kedi's favourite)";
    document.getElementById('show').style.display = 'none';
    document.getElementById('hide').style.display = 'flex';
  }, 10000);
});

const phirse = () => {
  document.getElementById('drink').value = '';
  document.getElementById('result').innerText =
    "Only old monk and magic moments. (Kedi's favourite)";
  document.getElementById('show').style.display = 'none';
  document.getElementById('hide').style.display = 'flex';
};
