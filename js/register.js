document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".input-group").forEach(group => {
    const label = group.querySelector("label");
    const text = group.dataset.label || "";
    label.innerHTML = "";

    // ✔ правильная обработка пробела
    const safeText = text.replace(/ /g, "\u00A0");

    safeText.split("").forEach((letter, i) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = letter;

      // задержка анимации
      span.style.transitionDelay = `${i * 40}ms`;

      label.appendChild(span);
    });
  });
});

// кнопка выхода
document.querySelector(".close-btn").addEventListener("click", () => {
  window.location.href = "/index.html";
});
