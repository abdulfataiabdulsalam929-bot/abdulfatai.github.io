/* =========================================
   AFT PORTFOLIO
   PART 6 — SCROLL REVEAL
========================================= */

const revealElements = document.querySelectorAll(
    ".section-heading, .journey-card, .learning-group, .project-card, .faith-section, .contact"
);


const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});
/* =========================================
   PART 7 — ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".navbar nav a");

const navObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                navLinks.forEach((link) => {
                    link.classList.remove("active");
                });

                const activeLink = document.querySelector(
                    `.navbar nav a[href="#${entry.target.id}"]`
                );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        threshold: 0.35
    }
);


sections.forEach((section) => {
    navObserver.observe(section);
});
/* =========================================
   BACK TO TOP
========================================= */

const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }
});