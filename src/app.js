const containerEl = document.querySelector("#bookmarkList");
const inputEl = document.querySelector("#bookmarkInput");
const addbtnEl = document.querySelector(".addBookmarkBtn");

// const STORAGE_KEY = "bookmarks";

let bookmarks = [];

// bookmarks.push(JSON.parse(localStorage.getItem("bookmarks")));

bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];




function render(arr) {
  const item = arr
    .map((value, index) => {
      return `<li data-index="${index}"> 
        <a href="${value}"> ${value} </a> 
<div class="button-div">
        <button class="delete"> delete </button> 
        <button class="edit"> edit </button> 
</div>
        </li>`;
    })
    .join("");
  containerEl.innerHTML = item;
}

render(bookmarks);

function save() {
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}

inputEl.addEventListener("change", (e) => {
  // console.log(inputEl);
  // console.log(e.target.value);

  if (changeActive) {
    bookmarks[index] = e.target.value;
    save();
    render(bookmarks);
    e.target.value = "";
    changeActive = false
    return;
  }

  bookmarks.push(e.target.value);
  save();
  render(bookmarks);
  e.target.value = "";

  // const note = `<li> <a href="${e.target.value}"> ${e.target.value} </a> <button class="delete"> delete </button> </li>`;
  // containerEl.innerHTML += note;

  // bookmarks.push(e.target.value);
  // localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
});

// localStorage.setItem(`${e.target.value}`, JSON.stringify(`${e.target.value}`));

let changeActive = false;
let index = null

containerEl.addEventListener("click", (e) => {
  let li = e.target.closest("li");
  index = Number(li.dataset.index);
  if (e.target.classList.contains("delete")) {
    li.remove();
    bookmarks.splice(index, 1);
    save();
    render(bookmarks);
  }

  if (e.target.classList.contains("edit")) {
    // li.innerHTML += `<input type="text" class="bookmarkEdit" placeholder="URL" />`
    inputEl.value = bookmarks[index];
    changeActive = true;
  }
});

//

