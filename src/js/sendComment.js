import firebase from './config';
import getAllPosts from './getAllPosts';
import renderAllPosts from './renderAllPosts';
import getAllLikes from './getAllLikes';

const sendComment = () => {
    const forms = document.querySelectorAll('.form-send-comment');
    const arrayOfForms = Array.from(forms);
    arrayOfForms.forEach(btn => {
        btn.addEventListener('submit', send);
    });
};

function send(e) {
    e.preventDefault();
    const id = this.dataset.id;
    const ref = firebase.database().ref(`posts/${id}`);
    let post;
    ref.on('value', (snapshot) => {
        post = snapshot.val();
    });
    const inputValue = this.children[0].value;
    if (post.comments) {
        const arrOfPosts = JSON.parse(post.comments);
        arrOfPosts.push(inputValue);
        post.comments = JSON.stringify(arrOfPosts);
        ref.update(post);
    } else {
        post.comments = JSON.stringify([inputValue]);
        ref.update(post);
    }
    getAllPosts().then(data => {
        renderAllPosts(data);
        getAllLikes();
        sendComment();
    });
}

export default sendComment;
