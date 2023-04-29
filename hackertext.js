const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

window.onload = () => {
  const headings = document.querySelectorAll("[data-auto-activate-effect='true'][data-value]");

  headings.forEach((heading) => {
    let iterations = 0;

    const interval = setInterval(() => {
      heading.innerText = heading.dataset.value
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return heading.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * letters.length)];
        })
        .join("");

      if (iterations >= heading.dataset.value.length) clearInterval(interval);

      iterations += 1 / 3;
    }, 30);
  });
};