
function hideLoader(): void {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }

    const mainContent = document.querySelector(".main-content");
    if (mainContent) {
        (mainContent as HTMLElement).style.display = "block";
    }
}

function startLoader(): void {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "flex";
    }

   setTimeout(hideLoader, 20000);
}

window.onload = () => {
    startLoader();
};
