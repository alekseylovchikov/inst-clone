const modalWindow = document.querySelector('.modal');
const inputDesc = document.querySelector('#description');
const inputImg = document.querySelector('#image-url');

export default class Modal {
    openModal() {
        modalWindow.classList.remove('modal--close');
        modalWindow.classList.add('modal--open');
    }
    closeModal() {
        modalWindow.classList.remove('modal--open');
        modalWindow.classList.add('modal--close');
    }
    clearModal() {
        inputImg.value = '';
        inputDesc.value = '';
    }
}
