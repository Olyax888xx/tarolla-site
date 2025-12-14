const reviews = [
    {
        text: "«Прекрасный специалист! Чувствуется большой опыт и интуиция. Расклад попал точно в цель...»",
        author: "Анна, 27 лет"
    },
    {
        text: "«Очень благодарна за консультацию! Всё по делу, подробный разбор ситуации...»",
        author: "Мария, 31 год"
    },
    {
        text: "«Получил ответы на все вопросы. Теперь понятно, как двигаться дальше...»",
        author: "Игорь, 29 лет"
    }
];

let index = 0;

const reviewText = document.getElementById("review-text");
const reviewAuthor = document.getElementById("review-author");

function showReview(i) {
    reviewText.textContent = reviews[i].text;
    reviewAuthor.textContent = reviews[i].author;
}

document.querySelector(".arrow.left").addEventListener("click", () => {
    index = (index - 1 + reviews.length) % reviews.length;
    showReview(index);
});

document.querySelector(".arrow.right").addEventListener("click", () => {
    index = (index + 1) % reviews.length;
    showReview(index);
});

// Показ первого отзыва
showReview(index);
