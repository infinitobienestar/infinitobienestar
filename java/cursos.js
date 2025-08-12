let currentIndex = 0;

const courses = document.querySelectorAll('.curso');
const totalCourses = courses.length;

const prevButton = document.querySelector('.prev');  // Agregado
const nextButton = document.querySelector('.next');  // Agregado

prevButton.addEventListener('click', showPrevCourse);
nextButton.addEventListener('click', showNextCourse);

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Disable/Enable buttons based on currentIndex
    prevButton.disabled = (currentIndex === 0);
    nextButton.disabled = (currentIndex === totalCourses - 1);

    prevButton.classList.toggle('disabled', currentIndex === 0);
    nextButton.classList.toggle('disabled', currentIndex === totalCourses - 1);
}

function showPrevCourse() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
    }
}

function showNextCourse() {
    if (currentIndex < totalCourses - 1) {
        currentIndex++;
        updateCarousel();
    }
}

// Initialize carousel
updateCarousel();
