// =========================
// TYPING ANIMATION
// =========================

const text =
"Aarav Sharma | Future Aerospace Engineer";

let i = 0;

function typeWriter() {

    if (i < text.length) {

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 70);

    }

}

typeWriter();


// =========================
// ANIMATED COUNTERS
// =========================

const counters =
document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target =
        +counter.getAttribute("data-target");

        const current =
        +counter.innerText;

        const increment =
        Math.ceil(target / 100);

        if (current < target) {

            counter.innerText =
            current + increment;

            setTimeout(updateCounter, 20);

        }

        else {

            counter.innerText = target;

        }

    };

    updateCounter();

});


// =========================
// DARK MODE TOGGLE
// =========================

const themeToggle =
document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light");

    if (
        document.body.classList.contains("light")
    ) {

        themeToggle.innerHTML = "☀️";

    }

    else {

        themeToggle.innerHTML = "🌙";

    }

});


// =========================
// MOBILE MENU
// =========================

const hamburger =
document.querySelector(".hamburger");

const menu =
document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("show");

});


// =========================
// CONTACT FORM VALIDATION
// =========================

const form =
document.getElementById("contactForm");

form.addEventListener("submit", function(e) {

    e.preventDefault();

    const name =
    document.getElementById("name");

    const email =
    document.getElementById("email");

    const message =
    document.getElementById("message");

    const error =
    document.getElementById("error");

    if (
        name.value.trim() === "" ||
        email.value.trim() === "" ||
        message.value.trim() === ""
    ) {

        error.innerHTML =
        "⚠ Please fill all fields.";

        error.style.color = "red";

        return;

    }

    const emailPattern =
    /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (
        !email.value.match(emailPattern)
    ) {

        error.innerHTML =
        "⚠ Enter a valid email address.";

        error.style.color = "red";

        return;

    }

    error.innerHTML =
    "✅ Message sent successfully!";

    error.style.color =
    "lightgreen";

    form.reset();

});


// =========================
// SMOOTH SCROLL NAVBAR
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


// =========================
// SCROLL REVEAL ANIMATION
// =========================

const revealElements =
document.querySelectorAll(
    ".timeline-item, .card, .glass, .testimonial"
);

const revealObserver =
new IntersectionObserver(
(entries) => {

    entries.forEach(entry => {

        if (
            entry.isIntersecting
        ) {

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},
{
    threshold: 0.2
}
);

revealElements.forEach(el => {

    el.style.opacity = "0";

    el.style.transform =
    "translateY(50px)";

    el.style.transition =
    "all 0.8s ease";

    revealObserver.observe(el);

});


// =========================
// CERTIFICATE IMAGE ZOOM
// =========================

const certificates =
document.querySelectorAll(
".gallery img"
);

certificates.forEach(img => {

    img.addEventListener(
        "click",
        () => {

            img.classList.toggle(
                "activeZoom"
            );

        }
    );

});


// =========================
// CURRENT YEAR FOOTER
// =========================

const footer =
document.querySelector("footer p");

footer.innerHTML =
`© ${new Date().getFullYear()} GEMMA Student Portfolio`;


// =========================
// PAGE LOADER EFFECT
// =========================

window.addEventListener(
"load",
() => {

    document.body.style.opacity = "1";

}
);