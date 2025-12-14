// modal.js — полностью заменяет старый файл
document.addEventListener("DOMContentLoaded", () => {

  const authModal = document.getElementById("auth-modal");
  const sessionModal = document.getElementById("session-modal");

  const accountIcon = document.querySelector(".account");
  const closeAuth = document.getElementById("close-modal");
  const closeSession = document.getElementById("close-session");
  const openSessionLink = document.getElementById("open-session");
  const sessionForm = document.getElementById("session-form");

  // Открытие auth-модалки
  if (accountIcon && authModal) {
    accountIcon.addEventListener("click", (e) => {
      e.preventDefault();
      authModal.style.display = "block";
    });
  }

  // Открытие модалки записи
  if (openSessionLink && sessionModal) {
    openSessionLink.addEventListener("click", (e) => {
      e.preventDefault();
      sessionModal.style.display = "block";

      const firstInput = sessionModal.querySelector("input");
      if (firstInput) firstInput.focus();
    });
  }

  // Закрытие крестиками
  if (closeAuth) {
    closeAuth.addEventListener("click", () => authModal.style.display = "none");
  }
  if (closeSession) {
    closeSession.addEventListener("click", () => sessionModal.style.display = "none");
  }

  // Закрытие кликом по фону
  if (authModal) {
    authModal.addEventListener("click", (e) => {
      if (e.target === authModal) authModal.style.display = "none";
    });
  }

  if (sessionModal) {
    sessionModal.addEventListener("click", (e) => {
      if (e.target === sessionModal) sessionModal.style.display = "none";
    });
  }

  /* === АНИМИРОВАННЫЕ LABEL ДЛЯ ИНПУТОВ === */
  if (sessionModal) {
    const groups = sessionModal.querySelectorAll(".input-group");

    groups.forEach(group => {
      const label = group.querySelector("label");
      const text = group.dataset.label || "";
      const input = group.querySelector("input");

      if (!label || !input) return;

      label.innerHTML = "";

      // ● главный фикс — заменяем обычные пробелы на неразрывные
      const properText = text.replace(/ /g, "\u00A0");

      // ● анимация по буквам
      properText.split("").forEach((letter, i) => {
        const span = document.createElement("span");
        span.className = "char";
        span.textContent = letter;
        span.style.transitionDelay = `${i * 35}ms`;
        label.appendChild(span);
      });

      // ● placeholder обязателен, чтобы CSS работал
      if (!input.hasAttribute("placeholder")) {
        input.setAttribute("placeholder", " ");
      }
    });
  }

  /* === Отправка формы === */
  if (sessionForm) {
    sessionForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nameInput = sessionForm.querySelector('input[type="text"]');
      const phoneInput = sessionForm.querySelector('input[type="tel"]');

      const name = nameInput.value.trim();
      const phone = phoneInput.value.trim();

      if (!name) {
        alert("Введите имя");
        nameInput.focus();
        return;
      }

      if (!phone) {
        alert("Введите номер телефона");
        phoneInput.focus();
        return;
      }

      alert(`Заявка отправлена!\nИмя: ${name}\nТелефон: ${phone}`);

      sessionForm.reset();
      sessionModal.style.display = "none";
    });
  }

});
