const tabs = [
    "about",
    "projects",
    "contact"
];

document.addEventListener("DOMContentLoaded", () => {
    tabs.forEach((val) => {
        document.getElementById(`tab-${val}`).addEventListener("click", () => {
            location.href = "#";
            location.href = `#${val}`;
        });
    });
});