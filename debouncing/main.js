import fetchApi from "./helpers/fetchApi";
import debounce from "./main/debounce";
import "./style.css";

// API Endpoint
const URL = "https://jsonplaceholder.typicode.com/posts";

// Global variables
let posts_list;

// DOM element nodes
const searchNode = document.getElementById("search");
const contentNode = document.getElementById("content");

/* -------------------------------------------------- LOAD AND RENDER INITIAL LIST OF POSTS -------------------------------------------------- */

// Event listener - update posts_list on page load
document.addEventListener("DOMContentLoaded", () => {
  renderList();
});
// render initial list
async function renderList() {
  posts_list = await fetchApi(URL);
  displayPosts(posts_list);
}

/* -------------------------------------------------- ** DEBOUNCED SEARCH ** -------------------------------------------------- */

// Event listener - update search term on 'keyup' event -----> [debounced]
searchNode.addEventListener(
  "keyup",
  // debounced function
  debounce((e) => {
    let searchKey = e.target.value;
    let updated_posts = filterPosts(searchKey, posts_list);
    displayPosts(updated_posts);
  }, 2000)
);

// returns filtered 'posts_list' after comparison to 'searchKey'
function filterPosts(searchKey, posts_list) {
  return posts_list.filter((post) =>
    post.title.toLowerCase().includes(searchKey.toLowerCase())
  );
}

/* -------------------------------------------------- DISPLAY LIST OF POSTS -------------------------------------------------- */

// display posts-list as html
function displayPosts(posts_list) {
  const posts = posts_list
    .map((post) => {
      return `
      <div class="post">
      <h2 class="post-title">${post.title}</h2>
      <p class="post-body">${post.body}</p>
      </div>
      `;
    })
    .join("");

  contentNode.innerHTML = posts;
}
