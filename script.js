document.addEventListener('DOMContentLoaded', () => {
    const commentButtons = document.querySelectorAll('.comments-section button');

    commentButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const commentsSection = e.target.closest('.comments-section');
            const textarea = commentsSection.querySelector('textarea');
            const commentList = commentsSection.querySelector('ul');
            const newComment = textarea.value.trim();

            if (newComment) {
                const newCommentElement = document.createElement('li');
                newCommentElement.textContent = User: ${newComment};
                commentList.appendChild(newCommentElement);
                textarea.value = '';
            } else {
                alert('Please enter a comment before submitting.');
            }
        });
    });
});