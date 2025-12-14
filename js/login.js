document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".input-group").forEach(group => {
    const label = group.querySelector("label");
    const text = group.dataset.label || "";
    label.innerHTML = "";

    text.split("").forEach((letter, i) => {
      const span = document.createElement("span");
      span.className = "char";
      span.textContent = letter;
      // задержка в миллисекундах, регулируй 30..60 для скорости
      span.style.transitionDelay = `${i * 40}ms`;
      label.appendChild(span);
    });
  });
});

document.querySelector(".close-btn").addEventListener("click", () => {
    window.location.href = "/index.html";
});