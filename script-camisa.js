//Javascript da LOJA

//Javascript do visor das camisas
const tabCamisas = document.querySelectorAll('.js-camisas-menu li')
const paneCamisa = document.querySelectorAll('.js-camisa-principal')

tabCamisas.forEach((tab, index) =>{
    tab.addEventListener('click' ,(event) =>{
        event.preventDefault();

        tabCamisas.forEach(itemTab =>{
            itemTab.classList.remove('active');
        })

        paneCamisa.forEach(itemPane =>{
            itemPane.classList.remove('active')
        })

        tab.classList.add('active');

        paneCamisa[index].classList.toggle('active')
    })
})
//Javascript do visor das camisas


//Javascript dos botões

const btnYellow = document.querySelector('.js-btn-yellow')
const btnBlack = document.querySelector('.js-btn-black')
const shirtYellow = document.querySelector('.js-roupas-amarela')
const shirtBlack = document.querySelector('.js-roupas-preta')
const yellowMain = document.querySelector('.js-camisa-amarela')
const blackMain = document.querySelector('.js-camisa-preta')

btnBlack.addEventListener('click', (event) =>{
    event.preventDefault();

    btnBlack.classList.add('active');
    btnYellow.classList.remove('active');

    shirtBlack.classList.add('active');
    shirtYellow.classList.remove('active');

    blackMain.classList.add('active');
    yellowMain.classList.remove('active');

});

btnYellow.addEventListener('click', (event) =>{
    event.preventDefault();

    btnBlack.classList.remove('active');
    btnYellow.classList.add('active');

    shirtBlack.classList.remove('active');
    shirtYellow.classList.add('active')

    yellowMain.classList.add('active');
    blackMain.classList.remove('active');

});

//Javascript da LOJA


//Javascript do MODAL
const btnOpenModal = document.querySelector('.js-open-modal')
const btnCloseModal =document.querySelector('.js-close-modal')
const modal = document.querySelector('.js-modal')

function openModal(event){
    event.preventDefault();
    modal.classList.add('active')
}
function closeModal(event){
    event.preventDefault()
    modal.classList.remove('active')
}

btnOpenModal.addEventListener('click', openModal)
btnCloseModal.addEventListener('click', closeModal)

//Javascript do MODAL

//Javascript do Dropdown
const dropdownMenu = document.querySelector('.js-dropdown')
const btnDrop = document.querySelector('.js-btn-dropdown')
const arrowImage = document.querySelector('.js-arrow')


const dropdownMenu2 = document.querySelector('.js-dropdown2')
const btnDrop2 = document.querySelector('.js-btn-dropdown2')
const arrowImage2 = document.querySelector('.js-arrow2')

function openDropdown(event){
    event.preventDefault();

    dropdownMenu.classList.toggle('active')
    dropdownMenu2.classList.remove('active')
    arrowImage.classList.toggle('active')
    arrowImage2.classList.remove('active')
}

btnDrop.addEventListener('click', openDropdown)
dropdownMenu.addEventListener('mouseleave', openDropdown)

function openDropdown2(event){
    event.preventDefault();

    dropdownMenu2.classList.toggle('active')
    dropdownMenu.classList.remove('active')
    arrowImage2.classList.toggle('active')
    arrowImage.classList.remove('active')
}

btnDrop2.addEventListener('click', openDropdown2)
dropdownMenu2.addEventListener('mouseleave', openDropdown2)

//Javascript do Dropdown

//Javascript do Scroll do Footer
const btnScroll = document.querySelector('.js-btn-scroll')

btnScroll.addEventListener('click', ()=>{
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    })
})
//Javascript do Scroll do Footer

//Javascript do Menu Mobile
const mobileMenu = document.querySelector('.js-mobile-menu')
const btnMobile = document.querySelector('.js-btn-mobile')

btnMobile.addEventListener('click', (event) =>{
    event.preventDefault()

    mobileMenu.classList.toggle('active')
})
//Javascript do Menu Mobile