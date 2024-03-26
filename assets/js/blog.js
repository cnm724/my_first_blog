const blogArea = document.querySelector(".blogArea");

function renderBlogPosts() {

   console.log("here");
   const blogEntries = JSON.parse(localStorage.getItem("blogPosts")) || [];
   console.log(blogEntries);
  let blogCard = "";
   blogEntries.forEach(entry => {
    blogCard += `
        <div>
            <h4>Title: ${entry.title}</h4>
            <p>Username: ${entry.username}</p>
            <p>Content: ${entry.content}</p>
        </div>
    `
    blogArea.innerHTML = blogCard
   });
}  

window.addEventListener("DOMContentLoaded", function(event){
    event.preventDefault();
    renderBlogPosts();
})