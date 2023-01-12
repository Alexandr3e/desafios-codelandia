const icon = document.querySelectorAll("#heart-icon");

icon.forEach(icon => {
    icon.onclick = () => {
        icon.classList.toggle("filled");
    };
})