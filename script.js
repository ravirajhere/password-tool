// Elements
const lengthSlider = document.getElementById("lengthSlider");
const lengthValue = document.getElementById("lengthValue");
const generateBtn = document.getElementById("generateBtn");
const generatedPassword = document.getElementById("generatedPassword");
const checkInput = document.getElementById("checkInput");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

// Slider update
lengthSlider.addEventListener("input", () => {
  lengthValue.textContent = lengthSlider.value;
});

// Password generate
generateBtn.addEventListener("click", () => {
  const length = parseInt(lengthSlider.value);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let password = "";
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  generatedPassword.textContent = password;
});

// Strength check
checkInput.addEventListener("input", () => {
  const pwd = checkInput.value;
  let score = 0;

  if (pwd.length >= 8) score++;
  if (pwd.length >= 12) score++;
  if (/[A-Z]/.test(pwd)) score++;
  if (/[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;

  let width = 0;
  let color = "";
  let text = "";

  if (pwd.length === 0) {
    width = 0;
    text = "—";
  } else if (score <= 2) {
    width = 33;
    color = "#ef4444";
    text = "Weak";
  } else if (score <= 4) {
    width = 66;
    color = "#f59e0b";
    text = "Medium";
  } else {
    width = 100;
    color = "#22c55e";
    text = "Strong";
  }

  strengthBar.style.setProperty("--width", width + "%");
  strengthBar.style.setProperty("--color", color);

  // Apply via inline style
  strengthBar.innerHTML = `<div style="width:${width}%;height:100%;background:${color};transition:all 0.3s;"></div>`;
  strengthText.textContent = text;
  strengthText.style.color = color || "#e2e8f0";
});
