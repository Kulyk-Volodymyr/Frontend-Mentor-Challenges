const resultValue = document.getElementById("result-value");
const resultTitle = document.getElementById("result-title");
const resultText = document.getElementById("result-text");
const reactionResult = document.getElementById("reaction-result");
const memoryResult = document.getElementById("memory-result");
const verbalResult = document.getElementById("verbal-result");
const visualResult = document.getElementById("visual-result");
const button = document.getElementById("button");
button.onclick = newResult;
let results = [80, 92, 61, 72, 76];

function startCounter(item, value) {
  let initialValue = 0;
  let counts = setInterval(() => {
    initialValue++;
    item.innerHTML = initialValue;
    if (initialValue === value) {
      clearInterval(counts);
    }
  }, 10);
}

function displayResults() {
  startCounter(reactionResult, results[0]);
  startCounter(memoryResult, results[1]);
  startCounter(verbalResult, results[2]);
  startCounter(visualResult, results[3]);

  setTimeout(() => startCounter(resultValue, results[4]), 1500);

  setTimeout(() => {
    resultTitle.style.transition = "1s";
    resultTitle.style.opacity = "1";
  }, 3000);

  setTimeout(() => {
    resultText.style.transition = "1s";
    resultText.style.opacity = "1";
  }, 3600);

  button.disabled = true;
  setTimeout(() => {
    button.disabled = false;
  }, 4000);
}

displayResults();

function newResult() {
  for (let i = 0; i < 4; i++) {
    results[i] = Math.floor(Math.random() * 46 + 55);
  }
  results[4] = Math.round(
    (results[0] + results[1] + results[2] + results[3]) / 4
  );
  reactionResult.innerHTML = 0;
  memoryResult.innerHTML = 0;
  verbalResult.innerHTML = 0;
  visualResult.innerHTML = 0;
  resultValue.innerHTML = 0;
  resultTitle.style.transition = "200ms";
  resultTitle.style.opacity = "0";
  resultText.style.transition = "200ms";
  resultText.style.opacity = "0";
  displayResults();
}
