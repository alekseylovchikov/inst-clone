import firebase from './config';
import getAllPosts from './getAllPosts';
import renderAllPosts from './renderAllPosts';

const getAllLikes = () => {
    const likeBtns = document.querySelectorAll('.like-btn');
    const arrayOfBtns = Array.from(likeBtns);
    arrayOfBtns.forEach(btn => {
        btn.addEventListener('click', likeUnlike);
    });
};

function likeUnlike() {
    const id = this.dataset.id;
    const ref = firebase.database().ref(`posts/${id}`);
    let post;
    ref.on('value', (snapshot) => {
        post = snapshot.val();
    });
    post.isLiked = !post.isLiked;
    ref.update(post);
    getAllPosts().then(data => {
        renderAllPosts(data);
        getAllLikes();
    });
}

export default getAllLikes;
