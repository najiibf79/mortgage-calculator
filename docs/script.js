function calculate() {
  const amount = parseFloat(document.getElementById('amount').value);
  const rate = parseFloat(document.getElementById('rate').value) / 100 / 12;
  const years = parseFloat(document.getElementById('years').value) * 12;

  if (!amount || !rate || !years) {
    document.getElementById('result').innerText = "Please fill in all fields.";
    return;
  }

  const x = Math.pow(1 + rate, years);
  const monthly = (amount * rate * x) / (x - 1);

  if (isFinite(monthly)) {
    document.getElementById('result').innerText = `Monthly Payment: £${monthly.toFixed(2)}`;
  } else {
    document.getElementById('result').innerText = "Check your input values.";
  }
}
