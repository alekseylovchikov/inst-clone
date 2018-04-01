import firebase from './config';
import Modal from './modal';
import getAllPosts from './getAllPosts';
import renderAllPosts from './renderAllPosts';
import getAllLikes from './getAllLikes';

const description = document.querySelector('#description');
const imageURL = document.querySelector('#image-url');

const modal = new Modal();

export default (e) => {
    e.preventDefault();
    const ref = firebase.database().ref('posts');
    ref.push({
        description: description.value,
        imageURL: imageURL.value,
        createdAt: +new Date(),
        isLiked: false,
        comments: ''
    });
    modal.clearModal();
    modal.closeModal();
    getAllPosts().then(data => {
        renderAllPosts(data);
        getAllLikes();
    });
};
