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


//Javascript da seção INGRESSO
const tabIngressos = document.querySelectorAll('.js-ingressos-tab li a')
const paneIngressos = document.querySelectorAll('.js-ingressos-pane')

tabIngressos.forEach((tab, index) =>{
    tab.addEventListener('click' ,(event) =>{
        event.preventDefault();

        tabIngressos.forEach(itemTab =>{
            itemTab.classList.remove('active');
        })

        paneIngressos.forEach(itemPane =>{
            itemPane.classList.remove('active')
        })

        tab.classList.add('active');

        paneIngressos[index].classList.add('active')
    })
})
//Javascript da seção INGRESSO

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