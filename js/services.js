document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".flip-inner");

    cards.forEach(card => {
        const moreBtn = card.querySelector(".but_more");
        const backBtn = card.querySelector(".but_back");

        if (moreBtn) {
            moreBtn.addEventListener("click", () => {
                card.classList.add("flipped");
            });
        }

        if (backBtn) {
            backBtn.addEventListener("click", () => {
                card.classList.remove("flipped");
            });
        }
    });
});
