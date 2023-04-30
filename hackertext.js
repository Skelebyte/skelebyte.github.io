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

      if (iterations >= heading.dataset.value.length) {
        clearInterval(interval);
        heading.classList.add('done');
        checkIfTextFinished();
      }

      iterations += 1 / 3;
    }, 100);

    function checkIfTextFinished() {
      const doneHeadings = document.querySelectorAll('.done');
      if (doneHeadings.length === headings.length) {
        const fadeInUpElement = document.querySelector('.fade-in-up');
        fadeInUpElement.classList.add('done');
      }
    }
  });
};
