let verticalCarousels = document.querySelectorAll(".vertical-carousel");

verticalCarousels.forEach(function (item) {
    let itemHeight = item.offsetHeight;
    let topVal = 0;
    let items = item.querySelectorAll("li");

    item.style.lineHeight = `${itemHeight}px`;

    let interval = window.setInterval(function () {
        topVal -= itemHeight;

        if (topVal <= -(items.length * itemHeight)) {
            topVal = 0;
        }

        items.forEach(function (li) {
            li.style.top = `${topVal}px`;
        });
    }, 1600);
});
