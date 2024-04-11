const mainElement = document.querySelector('main');
const backButton = document.querySelector('.back-button');

const instantiateList = function()
{
    const blogData = dataFromLocalStorage();

    if (blogData) {

    
        blogData.forEach(blog => {

          // create the article element
          const articleEl = document.createElement('article');
          articleEl.classList.add('card');
    
          // add image to the article
          const image = document.createElement('img');

          image.classList.add('card-image');
          image.setAttribute('src', './Assets/images/blue-icon.jpg');
          image.setAttribute('alt', 'a blue letter J icon');
          articleEl.appendChild(image);
    
          // add the div element
          const contentDiv = document.createElement('div');
          contentDiv.classList.add('card-content');
    
          // add title and username to the div
          const title = document.createElement('h2');
          title.textContent = blog.title;
          const byLine = document.createElement('p');
          byLine.classList.add('card-by');
          byLine.textContent = `by ${blog.username}`;
          
          // Should put the username beside the title nicely
          const titleContainer = document.createElement('div');
          titleContainer.classList.add('card-title');
          titleContainer.appendChild(title);
          titleContainer.appendChild(byLine);
          contentDiv.appendChild(titleContainer);
    
          // add blog content
          const content = document.createElement('p');
          content.textContent = blog.content;
          contentDiv.appendChild(content);
    
          // add div to article, then add article to main
          articleEl.appendChild(contentDiv);
          mainElement.appendChild(articleEl);
        });
    }
}

// wait for the document to load, then make the list
document.addEventListener('DOMContentLoaded', instantiateList);

backButton.addEventListener("click", () => 
{
    location.href = "./index.html";
});