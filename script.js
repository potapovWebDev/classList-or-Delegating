const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// ================= проверка у элемента класса, с последующим удалением либо добавлением класса ===================
btns[0].addEventListener('click', () => {
    if(!btns[1].classList.contains('red')) {
        btns[1].classList.add('red');
    } else {
        btns[1].classList.remove('red');
    }
    // либо (но оно не всегда доступно, иногда нужно именно вручную проверить есть ли класс в элементе)
    btns[5].classList.toggle('red')
});


// ==================================================================================================================

// ================================== \|/ деллигирование события \|/ ================================================

wrapper.addEventListener('click', (event) => { 
    if (event.target && event.target.tagName == 'BUTTON' /* .classList.contains('blue') или .mathes('button.red') */) {
        console.log('hello');
    }
});