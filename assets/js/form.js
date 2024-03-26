const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitInputButton = document.querySelector("#submit")


submitInputButton.addEventListener("click", function (event) {
    event.preventDefault();
    //sets users inputed values to variables
    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    //prompt user to finish form before moving on   
    if (username === "" || title === "" || content === "") {
        alert("Please complete form before submitting");
    } else {
        //creates inputs into an obejct
        let blogPosts = {
            username,
            title,
            content
        }
        //gets inputs from local storage and creates an array
        let blogEntries = JSON.parse(localStorage.getItem("blogPosts")) || [];
        blogEntries.push(blogPosts);
        //sets items to local storage as variable blocEntries, can be pulled on blog.js
        localStorage.setItem("blogPosts", JSON.stringify(blogEntries));

        //directs me to where the posts are listed
        window.location.href = "blog.html";
    }
});

