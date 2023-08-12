import fetchApi from "./helpers/fetchApi";
import "./style.css";

const URL = "https://jsonplaceholder.typicode.com/posts";
const posts = await fetchApi(URL);
console.log(posts);

const postsContent = posts.map((post) => {
  return `
    <div class="post">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">${post.body}</p>
    </div>
  `;
});

document.getElementById("content").innerHTML = postsContent.join("");
