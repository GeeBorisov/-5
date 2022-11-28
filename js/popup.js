const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('pop_up_close');
const popUp = document.getElementById('pop_up');

const openPopUpSingup = document.getElementById('open_pop_up-singup');
const closePopUpSingup = document.getElementById('pop_up_close-singup');
const popUpSingup = document.getElementById('pop_up-singup');

/* Login */
openPopUp.addEventListener('click', function(e) {
    e.preventDefault();
    popUp.classList.add('active');
})

closePopUp.addEventListener('click', () => {
    popUp.classList.remove('active');
})

/* Sing UP */
openPopUpSingup.addEventListener('click', function(e){
    e.preventDefault();
    popUpSingup.classList.add('active');
})

closePopUpSingup.addEventListener('click', () => {
    popUpSingup.classList.remove('active');
})

