var mainPic = document.querySelector('.main').children[1];
    var roulette = document.querySelector('.rulette');
    var prev = document.querySelector('#back');
    var next = document.querySelector('#go');
    var images = Array.from(document.querySelectorAll('.rulette img'));
    var currentIndex = 0;
    console.log(Array.from(document.querySelectorAll('.main button')))
    function updateMainPic(index) {
        mainPic.src = images[index].src;
    }

    roulette.addEventListener('click', (evt) => {
        if (evt.target.src) {
            currentIndex = images.findIndex(img => img.src === evt.target.src);
            updateMainPic(currentIndex);
        }
    });

    prev.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateMainPic(currentIndex);
    });

    next.addEventListener('click', () => {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateMainPic(currentIndex);
    });