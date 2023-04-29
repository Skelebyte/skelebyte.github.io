const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("h1").onmouseover = event => {
    let iterations = 0;
    
    const interval = ( () => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {

            if(index < iterations) {
                return event.target.dataset.value[index];
            }
            
            return letters[Math.floor(Math.random() * letters.length)]
        }).join("");


        if(iterations >= event.target.dataset.value.length) clearInterval(interval);

        iterations += 1 / 5;
    }, 30);
    
}