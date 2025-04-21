let selectedAnswer = null;

document.querySelectorAll('.hotspot').forEach(hotspot => {
  hotspot.addEventListener('click', () => {
    selectedAnswer = hotspot.dataset.answer.toLowerCase();
    document.getElementById('result').textContent = `You've selected a constellation. Now guess its name!`;
    document.getElementById('result').style.color = 'white';
  });
});

function checkGuess() {
  const guess = document.getElementById('guess').value.trim().toLowerCase();
  const result = document.getElementById('result');

  if (!selectedAnswer) {
    result.textContent = "❗ Please click on a constellation first!";
    result.style.color = "orange";
    return;
  }

  if (guess === selectedAnswer) {
    result.textContent = "✅ Correct!";
    result.style.color = "lightgreen";
  } else {
    result.textContent = `❌ Wrong! That wasn't "${guess}". Try again.`;
    result.style.color = "red";
  }
}
