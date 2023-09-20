// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isIntersecting) {
//             entry.target.classList.add('show');

//         } else {
//             entry.target.classList.remove('show');

//         }
//     });
// });

// const iconsElements = document.querySelectorAll('.skills-icons');
// hiddenElements.forEach((el) => observer.observe(el));
/*
.skill-card .skills-icons img {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}*/
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.skill-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const cardObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCards.forEach(function(card) {
        cardObserver.observe(card);
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const skillCards = document.querySelectorAll('.experience-card');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const cardObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    skillCards.forEach(function(card) {
        cardObserver.observe(card);
    });
});