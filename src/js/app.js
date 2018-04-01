import Modal from './modal';
import sendRequest from './form';
import getAllPosts from './getAllPosts';
import renderAllPosts from './renderAllPosts';
import getAllLikes from './getAllLikes';
import sendComment from './sendComment';

const openModalBtn = document.querySelector('#open-modal');
const closeModalBtn = document.querySelector('#reset');
const sendPostForm = document.querySelector('#send-request');

const modal = new Modal();

getAllPosts().then(data => {
  renderAllPosts(data);
  getAllLikes();
  sendComment();
});

openModalBtn.addEventListener('click', modal.openModal);
closeModalBtn.addEventListener('click', modal.closeModal);
sendPostForm.addEventListener('submit', sendRequest);
