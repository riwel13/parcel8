let e=document.querySelector("#bookmarkList"),t=document.querySelector("#bookmarkInput");document.querySelector(".addBookmarkBtn");let a=[];function o(t){e.innerHTML=t.map((e,t)=>`<li data-index="${t}"> 
        <a href="${e}"> ${e} </a> 
<div class="button-div">
        <button class="delete"> delete </button> 
        <button class="edit"> edit </button> 
</div>
        </li>`).join("")}function l(){localStorage.setItem("bookmarks",JSON.stringify(a))}a=JSON.parse(localStorage.getItem("bookmarks")),console.log(JSON.parse(localStorage.getItem("bookmarks"))),o(a),t.addEventListener("change",e=>{if(r){a[n]=e.target.value,l(),o(a),e.target.value="",r=!1;return}a.push(e.target.value),l(),o(a),e.target.value=""});let r=!1,n=null;e.addEventListener("click",e=>{let s=e.target.closest("li");n=Number(s.dataset.index),e.target.classList.contains("delete")&&(s.remove(),a.splice(n,1),l(),o(a)),e.target.classList.contains("edit")&&(t.value=a[n],r=!0)});
//# sourceMappingURL=parcel8.d33b3651.js.map
