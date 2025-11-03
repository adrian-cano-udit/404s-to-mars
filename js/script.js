$(document).ready(function () {
    // Add retro terminal typing effect to subtitle
    var subtitle = $(".subtitle");
    var text = subtitle.text();
    subtitle.text("");

    var i = 0;
    var typingEffect = setInterval(function () {
        if (i < text.length) {
            subtitle.text(subtitle.text() + text.charAt(i));
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 50);

    // Add glitch effect to title on hover
    var title = $("h1");
    title.on("mouseenter", function () {
        title.addClass("glitch");
    });
    title.on("mouseleave", function () {
        title.removeClass("glitch");
    });
});

$(".neon-btn").on("click", function () {
    $(".text-container").slideToggle();
});

// Add global cursor effect
$(document).on("mousemove", function (e) {
    var cursorGlow = $("<div></div>")
        .addClass("cursor-glow")
        .css({
            left: e.clientX + "px",
            top: e.clientY + "px",
        });
    $("body").append(cursorGlow);

    setTimeout(function () {
        cursorGlow.css({
            opacity: "0",
            transform: "scale(2)",
        });
        setTimeout(function () {
            cursorGlow.remove();
        }, 300);
    }, 50);
});

// document.addEventListener("DOMContentLoaded", () => {
//     // Add retro terminal typing effect to subtitle
//     const subtitle = document.querySelector("p");
//     const text = subtitle.textContent;
//     subtitle.textContent = "";

//     let i = 0;
//     const typingEffect = setInterval(() => {
//         if (i < text.length) {
//             subtitle.textContent += text.charAt(i);
//             i++;
//         } else {
//             clearInterval(typingEffect);
//         }
//     }, 50);

//     // Add glitch effect to title on hover
//     const title = document.querySelector("h1");
//     title.addEventListener("mouseenter", () => {
//         title.classList.add("glitch");
//     });
//     title.addEventListener("mouseleave", () => {
//         title.classList.remove("glitch");
//     });
// });

// // Add global cursor effect
// document.addEventListener("mousemove", (e) => {
//     const cursorGlow = document.createElement("div");
//     cursorGlow.classList.add("cursor-glow");
//     cursorGlow.style.left = `${e.clientX}px`;
//     cursorGlow.style.top = `${e.clientY}px`;
//     document.body.appendChild(cursorGlow);

//     setTimeout(() => {
//         cursorGlow.style.opacity = "0";
//         cursorGlow.style.transform = "scale(2)";
//         setTimeout(() => {
//             cursorGlow.remove();
//         }, 300);
//     }, 50);
// });
