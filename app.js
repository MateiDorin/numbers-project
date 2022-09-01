const items = [...document.querySelectorAll('.number')];

const updateCount = (el) => {
    const value = parseInt(el.dataset.value);
    const increment = Math.ceil(value/100);
    let initialValue = 0;

    const increaseCount = setInterval(() => {
        initialValue += increment;

        if (initialValue > value) {
            el.textContent = `${value}+`;
            clearInterval(increaseCount);
            return;
        }


        el.textContent = `${initialValue}+`
    }, 20)
}

items.forEach((item) => {
    updateCount(item);
})

