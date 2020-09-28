const verticalCarousels = document.querySelectorAll(".vertical-carousel");

verticalCarousels.forEach((item) => {
    const itemHeight = item.offsetHeight;
    const items = item.querySelectorAll("li");
    let topVal = 0;
    let paused = false;

    item.style.lineHeight = `${itemHeight}px`;

    let interval = window.setInterval(() => {
        if (paused) {
            return;
        }

        topVal -= itemHeight;

        if (topVal <= -(items.length * itemHeight)) {
            topVal = 0;
        }

        items.forEach((li) => {
            li.style.top = `${topVal}px`;
        });
    }, 2000);

    item.addEventListener("mouseover", () => {
        paused = true;
    });

    item.addEventListener("mouseout", () => {
        paused = false;
    });
});
