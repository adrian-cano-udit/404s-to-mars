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

// Toggle text container on button click
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
