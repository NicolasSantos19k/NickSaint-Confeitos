let valueDisplays = document.querySelectorAll(".num");
let interval = 2000;

let options = {
  threshold: 0.5, // 50% do elemento visível para disparar
};

let observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let valueDisplay = entry.target;
      let startValue = 0;
      let endValue = parseInt(valueDisplay.getAttribute("data-val"));
      let duration = Math.floor(interval / endValue);
      let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
          clearInterval(counter);
        }
      }, duration);
      observer.unobserve(valueDisplay); // evita repetir a animação
    }
  });
}, options);

// Observa cada elemento .num
valueDisplays.forEach((el) => {
  observer.observe(el);
});

/*Scroll reveal*/

  window.revelar = ScrollReveal({reset:true});

  revelar.reveal('.rosquinhas-preview', {
    duration: 3000,
    scale: '0.8'
})

  revelar.reveal('.bolo-img-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'left'
})

  revelar.reveal('.bolo-text-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'right'
})

  revelar.reveal('.card-1-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'left'
})

  revelar.reveal('.card-2-preview', {
    duration: 1500,
    scale: '0.8'
})

  revelar.reveal('.card-3-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'right',
})

  revelar.reveal('.card-4-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'left'
})

  revelar.reveal('.card-5-preview', {
    duration: 1500,
    scale: '0.8'
})

  revelar.reveal('.card-6-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'right'
})

  revelar.reveal('.donut-voando-preview', {
    duration: 1500,
    scale: '0.8'
})

  revelar.reveal('.donuts-voando-1-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'right'
})

  revelar.reveal('.donuts-voando-2-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'right',
    delay: 200
})

  revelar.reveal('.donuts-voando-3-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'left'
})

  revelar.reveal('.donuts-voando-4-preview', {
    duration: 1500,
    distance: '90px',
    origin: 'left',
    delay: 200
})

  revelar.reveal('.cards-1-preview', {
    duration: 1500,
    distance: '90px'
})

  revelar.reveal('.cards-2-preview', {
    duration: 1500,
    distance: '90px',
    delay: 200
})

  revelar.reveal('.cards-3-preview', {
    duration: 1500,
    distance: '90px',
    delay: 400
})