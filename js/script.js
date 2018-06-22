let verticalCarousels = document.querySelectorAll(".vertical-carousel");

verticalCarousels.forEach(function (item) {
    let itemHeight = item.offsetHeight;
    let topVal = 0;
    item.style.lineHeight = itemHeight + "px";
    let items = item.querySelectorAll("li");

    let interval = window.setInterval(function () {
        topVal -= itemHeight;

        if (topVal <= -(items.length * itemHeight)) {
            topVal = 0;
        }

        items.forEach(function (li) {
            li.style.top = topVal + "px";
        });
    }, 1600);
});
