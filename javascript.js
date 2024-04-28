new Glide('.glide', {
    type: 'carousel',
    perView: 2, 
    breakpoints: {
        940: {
            perView: 2
        },
        600: {
            perView: 1 
        }
    }
}).mount();

