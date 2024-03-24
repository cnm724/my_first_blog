function renderBlogPosts() {
    usernameInput.textContent = localStorage.getItem("username");
    titleInput.textContent = localStorage.getItem("title");
    contentInput.textContent = localStorage.getItem("content");
}  

renderBlogPosts();
