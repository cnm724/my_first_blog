const blogArea = document.querySelector(".blogArea");

function renderBlogPosts() {

    //pulls entries from local storage that was inputed on form
   const blogEntries = JSON.parse(localStorage.getItem("blogPosts")) || [];
   //logs the entries in the array to the console
   console.log(blogEntries);
    //creates empty string to store HTML content
   let blogCard = "";
    //loops through the array to pull info for blogCard
   blogEntries.forEach(entry => {
    //creates HTML sturctures for each blog post
    blogCard += `
        <div>
            <h4>Title: ${entry.title}</h4>
            <p>Content: ${entry.content}</p>
            <h5>Username: ${entry.username}</h5>
        </div>
    `
    //updates the content in the DOM
    blogArea.innerHTML = blogCard
   });
}  
//DOMContentLoaded event is fired when the HTML document has been parsed and loaded
window.addEventListener("DOMContentLoaded", function(event){
    event.preventDefault();
    renderBlogPosts();
})
