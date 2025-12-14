const slides = document.getElementById("slides");
        const slideWidth = 160;
        let index = 0;

        function nextSlide() {
            index++;
            slides.style.transition = "transform 0.8s ease-in-out";
            slides.style.transform = `translateX(${-slideWidth * index}px)`;

            // Когда доходим до клона первой картинки
            if (index === 3) {
                setTimeout(() => {
                    slides.style.transition = "none"; // отключаем анимацию
                    slides.style.transform = "translateX(0px)"; // прыжок в начало
                    index = 0;
                }, 800); // время совпадает с transition
            }
        }

        setInterval(nextSlide, 3000);