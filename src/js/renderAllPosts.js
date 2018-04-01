const posts = document.querySelector('.posts');

export default (arr) => {
    if (arr && Array.isArray(arr)) {
        posts.innerHTML = '';
        arr.sort((a, b) => b.createdAt - a.createdAt).forEach(post => {
            const section = document.createElement('section');
            section.classList.add('post');
            let comments = [];
            if (post.comments) {
                comments = JSON.parse(post.comments);
            }
            section.innerHTML = `
                <div class="user">
                    <img class="user-image" src="assets/images/user.svg" alt="user">
                    <div class="user-name">username</div>
                </div>
                <img class="photo" src="${post.imageURL}" alt="post photo">
                <div class="post-footer">
                    <span class="like-btn" data-id="${post.id}">
                        ${post.isLiked ? '<img class="icon-like is-liked" src="assets/images/liked.svg" alt="like">' : '<img class="icon-like is-not-liked" src="assets/images/like.svg" alt="like">'}
                    </span>
                    <img class="icon-comment" src="assets/images/comment.svg" alt="comment">
                    <div class="comment">
                        <span class="user-acc">username</span>
                        <span class="text">${post.description}</span>
                    </div>
                    ${comments.map(comment => {
                        return `
                            <div class="comment">
                                <span class="user-acc">username</span>
                                <span class="text">${comment}</span>
                            </div>
                        `;
                    }).join('')}
                    <div class="add-comment">
                        <form data-id="${post.id}" class="form-send-comment">
                            <input class="input-comment" type="text" placeholder="Добавьте комментарий...">
                            <button type="submit" class="send-comment"></button>
                        </form>
                    </div>
                </div>
            `;
            posts.appendChild(section);
        });
    }
};
