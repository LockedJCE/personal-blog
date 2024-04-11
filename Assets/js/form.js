const formElement = document.querySelector('form');

const changePage = function() 
{
    location.href = "./blog.html";
}

// setting blog data to local storage
const dataToLocalStorage = function(data)
{
    console.log("1");
    const blogData = dataFromLocalStorage();

    blogData.push(data);
    const stringFromData = JSON.stringify(blogData);
    console.log(blogData);

    localStorage.setItem("blogs", stringFromData)
    console.log("3");
}

// when send message button is pressed
const handleFormSubmit = function(event) 
{
    event.preventDefault();

    // get elements from the form
    const usernameEl = document.querySelector('#messageUsername').value.trim();
    const titleEl = document.querySelector('#messageTitle').value.trim();
    const contentEl = document.querySelector('#messageContent').value.trim();

    // alert window
    if(!usernameEl || !titleEl || !contentEl) { return window.alert("You have not filled out all the form boxes. Please review.")}

    // form data object
    const formData = {
        username: usernameEl,
        title: titleEl,
        content: contentEl
    }

    dataToLocalStorage(formData);
    changePage();
}

formElement.addEventListener('submit', handleFormSubmit);