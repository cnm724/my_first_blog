const usernameInput = document.querySelector("#username");
const titleInput = document.querySelector("#title");
const contentInput = document.querySelector("#content");
const submitInputButton = document.querySelector("#submit")


submitInputButton.addEventListener("click", function(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const title = titleInput.value;
    const content = contentInput.value;

    
    if (username === "" || title === "" || content === ""){
        alert("Please complete form before submitting");
    }else {
        localStorage.setItem("username", JSON.stringify(username));
        localStorage.setItem("title", JSON.stringify(title));
        localStorage.setItem("content", JSON.stringify(content));
        //directs me to where the posts are listed
        window.location.href = "blog.html";
    }

});


