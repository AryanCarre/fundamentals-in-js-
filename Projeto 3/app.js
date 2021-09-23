const circle = document.querySelector('#circle');

// ! em circle faz entender q caso nao tenha holy o if vai funcionar
circle.addEventListener('mouseenter', ()=> {
    if (!circle.classList.contains('holy')){
        circle.classList.add('holy');
    }
})

circle.addEventListener('mouseleave', ()=> {
    if (circle.classList.contains('holy')) {
        circle.classList.remove('holy');
    }
})