import firebase from './config';

export default () => {
    return new Promise((resolve) => {
        const ref = firebase.database().ref('posts');
        ref.on('value', (snapshot) => {
            const posts = snapshot.val();
            if (posts) {
                const arr = Object.keys(posts).map(key => {
                    return Object.assign(posts[key], { id: key });
                });
                resolve(arr);
            } else {
                resolve([]);
            }
        });
    });
};
